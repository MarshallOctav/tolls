import { useState, useMemo, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CategorySection } from '@/components/CategorySection';
import { StatusFilter } from '@/components/StatusFilter';
import { initialToolsData } from '@/data/toolsData';
import { Tool, ToolStatus, CATEGORIES, STATUS_OPTIONS } from '@/types/tool';
import { Search, LayoutGrid, Download, Upload, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { toast } from 'sonner';

const Index = () => {
  const [tools, setTools] = useState<Tool[]>(initialToolsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<ToolStatus | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  const importFileRef = useRef<HTMLInputElement>(null);
  const handleUpdateTool = (id: string, updates: Partial<Tool>) => {
    setTools(prev => 
      prev.map(tool => 
        tool.id === id ? { ...tool, ...updates } : tool
      )
    );
  };

  const getStatusLabel = (status: ToolStatus) => {
    const statusOption = STATUS_OPTIONS.find(s => s.value === status);
    return statusOption?.label || status;
  };

  const getStatusValue = (label: string): ToolStatus => {
    const statusOption = STATUS_OPTIONS.find(s => s.label.toLowerCase() === label.toLowerCase());
    return statusOption?.value || 'pending';
  };

  const handleExportToExcel = () => {
    const exportData = filteredTools.map(tool => ({
      'No': tool.no,
      'Nama Tools': tool.name,
      'Brand/App': tool.brandApp,
      'Kategori': tool.category,
      'Status': getStatusLabel(tool.status),
      'Note': tool.note,
      'PIC': tool.pic,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tools');
    
    // Auto-size columns
    const colWidths = [
      { wch: 5 },   // No
      { wch: 40 },  // Nama Tools
      { wch: 20 },  // Brand/App
      { wch: 20 },  // Kategori
      { wch: 25 },  // Status
      { wch: 30 },  // Note
      { wch: 15 },  // PIC
    ];
    worksheet['!cols'] = colWidths;

    XLSX.writeFile(workbook, `List_Tools_Manajemen_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const handleExportToPdf = () => {
    const doc = new jsPDF({ orientation: 'landscape' });
    const tableData = filteredTools.map(tool => [
      tool.no,
      tool.name,
      tool.brandApp,
      tool.category,
      getStatusLabel(tool.status),
      tool.note,
      tool.pic,
    ]);

    const tableHeaders = ['No', 'Nama Tools', 'Brand/App', 'Kategori', 'Status', 'Note', 'PIC'];

    doc.setFontSize(18);
    doc.text('List Tools Manajemen', 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Tanggal: ${new Date().toLocaleDateString('id-ID')}`, 14, 28);

    let startY = 34;

    // Add statistics section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Statistik Status', 14, startY);
    startY += 7;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');

    const col1X = 14;
    const col2X = 80;
    const col3X = 150;
    const col4X = 220;

    // Display stats in 4 columns
    STATUS_OPTIONS.forEach((status, index) => {
      const col = Math.floor(index / 2);
      const row = index % 2;
      const xPos = [col1X, col2X, col3X, col4X][col];
      const yPos = startY + (row * 6);
      doc.text(`${status.label}: ${statusCounts[status.value]}`, xPos, yPos);
    });

    startY += (Math.ceil(STATUS_OPTIONS.length / 4)) * 6 + 4;

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
      startY: startY,
      theme: 'grid',
      headStyles: {
        fillColor: [22, 163, 74], // Warna hijau primer
        textColor: 255,
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [242, 242, 242],
      },
      columnStyles: {
        0: { cellWidth: 10 }, // No
        1: { cellWidth: 50 }, // Nama Tools
        2: { cellWidth: 30 }, // Brand/App
        3: { cellWidth: 30 }, // Kategori
        4: { cellWidth: 35 }, // Status
        5: { cellWidth: 'auto' }, // Note
        6: { cellWidth: 25 }, // PIC
      },
      didDrawPage: (data) => {
        // Footer
        const pageCount = doc.getNumberOfPages();
        doc.setFontSize(10);
        doc.text(`Halaman ${data.pageNumber} dari ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
      }
    });

    doc.save(`List_Tools_Manajemen_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const handleImportClick = () => {
    importFileRef.current?.click();
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json<any>(worksheet);

        const importedTools: Tool[] = json.map((row, index) => ({
          id: `${row['Kategori']?.toLowerCase()}-${row['No']}-${Date.now()}-${index}`,
          no: row['No'],
          name: row['Nama Tools'],
          brandApp: row['Brand/App'],
          category: row['Kategori'],
          status: getStatusValue(row['Status']),
          note: row['Note'] || '',
          pic: row['PIC'] || '',
        }));

        setTools(importedTools);
        toast.success(`${importedTools.length} tools berhasil diimpor.`);
      } catch (error) {
        console.error("Error importing file:", error);
        toast.error("Gagal mengimpor file. Pastikan format file benar.");
      }
    };
    reader.readAsArrayBuffer(file);

    // Reset file input
    event.target.value = '';
  };
  // Calculate status counts
  const statusCounts = useMemo(() => {
    const counts: Record<ToolStatus | 'all', number> = {
      all: tools.length,
      pending: 0,
      in_progress: 0,
      deployed: 0,
      revision_after_deploy: 0,
      trial: 0,
      revision_after_trial: 0,
      launched: 0,
      revision_after_launch: 0,
    };
    
    tools.forEach(tool => {
      counts[tool.status]++;
    });
    
    return counts;
  }, [tools]);

  // Filter tools
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.brandApp.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.pic.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = selectedStatus === 'all' || tool.status === selectedStatus;
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [tools, searchQuery, selectedStatus, selectedCategory]);

  // Group tools by category
  const toolsByCategory = useMemo(() => {
    const grouped: Record<string, Tool[]> = {};
    
    filteredTools.forEach(tool => {
      if (!grouped[tool.category]) {
        grouped[tool.category] = [];
      }
      grouped[tool.category].push(tool);
    });
    
    return grouped;
  }, [filteredTools]);

  // Get unique categories from filtered tools
  const categories = useMemo(() => {
    return CATEGORIES.filter(cat => toolsByCategory[cat]?.length > 0);
  }, [toolsByCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <LayoutGrid className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">List Tools Manajemen</h1>
                <p className="text-sm text-muted-foreground">ABELL JABBAR - BELLCORP</p>
              </div>
            </div>
            
            <div className="flex-1 flex items-center gap-3 sm:ml-auto">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Cari tools, brand, atau PIC..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50 border-none"
                />
                <input
                  type="file"
                  ref={importFileRef}
                  onChange={handleFileImport}
                  className="hidden"
                  accept=".xlsx, .xls"
                />
              </div>
              <Button onClick={handleImportClick} variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Import</span>
              </Button>
              <Button onClick={handleExportToExcel} variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export XLS</span>
                <span className="hidden sm:inline">XLS</span>
              </Button>
              <Button onClick={handleExportToPdf} variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Filters */}
        <div className="space-y-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              Semua Kategori
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <StatusFilter
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            statusCounts={statusCounts}
          />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {STATUS_OPTIONS.map((status) => (
            <div
              key={status.value}
              className="bg-card rounded-xl p-3 border border-border"
            >
              <div className={`w-3 h-3 rounded-full ${status.color} mb-2`} />
              <p className="text-2xl font-bold">{statusCounts[status.value]}</p>
              <p className="text-xs text-muted-foreground truncate">{status.label}</p>
            </div>
          ))}
        </div>

        {/* Tools List */}
        <div className="space-y-8">
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategorySection
                key={category}
                category={category}
                tools={toolsByCategory[category]}
                onUpdateTool={handleUpdateTool}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada tools yang ditemukan</p>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            Menampilkan <span className="font-semibold text-foreground">{filteredTools.length}</span> dari{' '}
            <span className="font-semibold text-foreground">{tools.length}</span> tools
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
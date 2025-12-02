import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Tool, ToolStatus } from '@/types/tool';
import { StatusSelect } from './StatusSelect';

interface ToolsTableProps {
  tools: Tool[];
  onUpdateTool: (id: string, updates: Partial<Tool>) => void;
}

export const ToolsTable = ({ tools, onUpdateTool }: ToolsTableProps) => {
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editingPic, setEditingPic] = useState<string | null>(null);

  const handleStatusChange = (id: string, status: ToolStatus) => {
    onUpdateTool(id, { status });
  };

  const handleNoteChange = (id: string, note: string) => {
    onUpdateTool(id, { note });
  };

  const handlePicChange = (id: string, pic: string) => {
    onUpdateTool(id, { pic });
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="w-[50px] font-semibold">No</TableHead>
            <TableHead className="min-w-[250px] font-semibold">Nama Tools</TableHead>
            <TableHead className="min-w-[120px] font-semibold">Brand App</TableHead>
            <TableHead className="min-w-[180px] font-semibold">Status</TableHead>
            <TableHead className="min-w-[200px] font-semibold">Note</TableHead>
            <TableHead className="min-w-[150px] font-semibold">PIC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tools.map((tool, index) => (
            <TableRow 
              key={tool.id}
              className="group transition-colors hover:bg-muted/30"
            >
              <TableCell className="font-medium text-muted-foreground">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium">{tool.name}</TableCell>
              <TableCell>
                <span className="text-primary font-medium">{tool.brandApp || '-'}</span>
              </TableCell>
              <TableCell>
                <StatusSelect
                  value={tool.status}
                  onChange={(status) => handleStatusChange(tool.id, status)}
                />
              </TableCell>
              <TableCell>
                {editingNote === tool.id ? (
                  <Input
                    autoFocus
                    defaultValue={tool.note}
                    className="h-8"
                    onBlur={(e) => {
                      handleNoteChange(tool.id, e.target.value);
                      setEditingNote(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleNoteChange(tool.id, e.currentTarget.value);
                        setEditingNote(null);
                      }
                      if (e.key === 'Escape') {
                        setEditingNote(null);
                      }
                    }}
                  />
                ) : (
                  <div
                    onClick={() => setEditingNote(tool.id)}
                    className="cursor-pointer min-h-[32px] px-2 py-1 rounded hover:bg-muted/50 text-sm"
                  >
                    {tool.note || <span className="text-muted-foreground italic">Tambah note...</span>}
                  </div>
                )}
              </TableCell>
              <TableCell>
                {editingPic === tool.id ? (
                  <Input
                    autoFocus
                    defaultValue={tool.pic}
                    className="h-8"
                    onBlur={(e) => {
                      handlePicChange(tool.id, e.target.value);
                      setEditingPic(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handlePicChange(tool.id, e.currentTarget.value);
                        setEditingPic(null);
                      }
                      if (e.key === 'Escape') {
                        setEditingPic(null);
                      }
                    }}
                  />
                ) : (
                  <div
                    onClick={() => setEditingPic(tool.id)}
                    className="cursor-pointer min-h-[32px] px-2 py-1 rounded hover:bg-muted/50 text-sm"
                  >
                    {tool.pic || <span className="text-muted-foreground italic">Tambah PIC...</span>}
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
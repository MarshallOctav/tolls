import { Tool } from '@/types/tool';
import { ToolsTable } from './ToolsTable';
import { ChevronDown, ChevronRight, Folder } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CategorySectionProps {
  category: string;
  tools: Tool[];
  onUpdateTool: (id: string, updates: Partial<Tool>) => void;
}

export const CategorySection = ({ category, tools, onUpdateTool }: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 w-full text-left group"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
          <Folder className="w-4 h-4" />
        </div>
        <h2 className="text-lg font-semibold tracking-tight flex-1">
          {category}
        </h2>
        <span className="text-sm text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
          {tools.length} tools
        </span>
        <div className={cn(
          "w-6 h-6 flex items-center justify-center rounded-md transition-colors",
          "text-muted-foreground group-hover:bg-muted group-hover:text-foreground"
        )}>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </div>
      </button>
      
      {isExpanded && (
        <ToolsTable tools={tools} onUpdateTool={onUpdateTool} />
      )}
    </div>
  );
};
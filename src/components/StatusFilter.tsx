import { cn } from '@/lib/utils';
import { ToolStatus, STATUS_OPTIONS } from '@/types/tool';

interface StatusFilterProps {
  selectedStatus: ToolStatus | 'all';
  onStatusChange: (status: ToolStatus | 'all') => void;
  statusCounts: Record<ToolStatus | 'all', number>;
}

export const StatusFilter = ({ selectedStatus, onStatusChange, statusCounts }: StatusFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onStatusChange('all')}
        className={cn(
          'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
          selectedStatus === 'all'
            ? 'bg-foreground text-background'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        )}
      >
        Semua ({statusCounts.all})
      </button>
      {STATUS_OPTIONS.map((status) => (
        <button
          key={status.value}
          onClick={() => onStatusChange(status.value)}
          className={cn(
            'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
            selectedStatus === status.value
              ? cn(status.color, 'text-white')
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          )}
        >
          {status.label} ({statusCounts[status.value] || 0})
        </button>
      ))}
    </div>
  );
};
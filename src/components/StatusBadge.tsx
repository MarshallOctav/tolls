import { cn } from '@/lib/utils';
import { ToolStatus, STATUS_OPTIONS } from '@/types/tool';

interface StatusBadgeProps {
  status: ToolStatus;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusOption = STATUS_OPTIONS.find(s => s.value === status);
  
  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap',
        statusOption?.color,
        className
      )}
    >
      {statusOption?.label}
    </span>
  );
};
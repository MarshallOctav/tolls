import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToolStatus, STATUS_OPTIONS } from '@/types/tool';
import { StatusBadge } from './StatusBadge';

interface StatusSelectProps {
  value: ToolStatus;
  onChange: (value: ToolStatus) => void;
}

export const StatusSelect = ({ value, onChange }: StatusSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px] h-8 border-none bg-transparent p-0 shadow-none focus:ring-0">
        <SelectValue>
          <StatusBadge status={value} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {STATUS_OPTIONS.map((status) => (
          <SelectItem key={status.value} value={status.value}>
            <StatusBadge status={status.value} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
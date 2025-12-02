export type ToolStatus = 
  | 'pending'
  | 'in_progress'
  | 'deployed'
  | 'revision_after_deploy'
  | 'trial'
  | 'revision_after_trial'
  | 'launched'
  | 'revision_after_launch';

export interface Tool {
  id: string;
  no: number;
  name: string;
  brandApp: string;
  category: string;
  status: ToolStatus;
  note: string;
  pic: string;
}

export const STATUS_OPTIONS: { value: ToolStatus; label: string; color: string }[] = [
  { value: 'pending', label: 'Yang Belum', color: 'bg-[hsl(var(--status-pending))]' },
  { value: 'in_progress', label: 'On Progress', color: 'bg-[hsl(var(--status-progress))]' },
  { value: 'deployed', label: 'Sudah Deploy', color: 'bg-[hsl(var(--status-deployed))]' },
  { value: 'revision_after_deploy', label: 'Revisi Setelah Deploy', color: 'bg-[hsl(var(--status-revision-deploy))]' },
  { value: 'trial', label: 'Tahap Trial', color: 'bg-[hsl(var(--status-trial))]' },
  { value: 'revision_after_trial', label: 'Revisi Setelah Trial', color: 'bg-[hsl(var(--status-revision-trial))]' },
  { value: 'launched', label: 'Sudah Launch', color: 'bg-[hsl(var(--status-launched))]' },
  { value: 'revision_after_launch', label: 'Revisi Setelah Launch', color: 'bg-[hsl(var(--status-revision-launch))]' },
];

export const CATEGORIES = [
  'BELLCORP HIERARCHY',
  'SAAS & MICRO SAAS',
  'HOLDING / GENERAL',
  'TOUR TRAVEL',
  'OPTIBIS ID & IO',
  'MUSLIMAPPS.WEB',
  'MASTER B',
] as const;
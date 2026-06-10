export class TimeEntry {
  id: string;
  projectName: string;
  clientName: string;
  description: string;
  startTime: string;
  endTime: string | null;
  durationMinutes: number | null;
  billable: boolean;
  hourlyRate: number | null;
  createdAt: string;
  updatedAt: string;
}

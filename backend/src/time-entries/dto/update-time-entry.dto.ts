export class UpdateTimeEntryDto {
  projectName?: string;
  clientName?: string;
  description?: string;
  startTime?: string;
  endTime?: string | null;
  durationMinutes?: number | null;
  billable?: boolean;
  hourlyRate?: number | null;
}

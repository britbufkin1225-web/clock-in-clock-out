export class CreateTimeEntryDto {
  projectName: string;
  clientName: string;
  description: string;
  startTime: string;
  endTime?: string;
  durationMinutes?: number;
  billable?: boolean;
  hourlyRate?: number;
}

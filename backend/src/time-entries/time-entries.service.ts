import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTimeEntryDto } from './dto/create-time-entry.dto';
import { UpdateTimeEntryDto } from './dto/update-time-entry.dto';
import { TimeEntry } from './entities/time-entry.entity';

@Injectable()
export class TimeEntriesService {
  private readonly timeEntries: TimeEntry[] = [];

  create(createTimeEntryDto: CreateTimeEntryDto): TimeEntry {
    const now = new Date().toISOString();

    const timeEntry: TimeEntry = {
      id: crypto.randomUUID(),
      projectName: createTimeEntryDto.projectName,
      clientName: createTimeEntryDto.clientName,
      description: createTimeEntryDto.description,
      startTime: createTimeEntryDto.startTime,
      endTime: createTimeEntryDto.endTime ?? null,
      durationMinutes: createTimeEntryDto.durationMinutes ?? null,
      billable: createTimeEntryDto.billable ?? true,
      hourlyRate: createTimeEntryDto.hourlyRate ?? null,
      createdAt: now,
      updatedAt: now,
    };

    this.timeEntries.push(timeEntry);

    return timeEntry;
  }

  findAll(): TimeEntry[] {
    return this.timeEntries;
  }

  findOne(id: string): TimeEntry {
    const timeEntry = this.timeEntries.find((entry) => entry.id === id);

    if (!timeEntry) {
      throw new NotFoundException(`Time entry with id "${id}" not found`);
    }

    return timeEntry;
  }

  update(id: string, updateTimeEntryDto: UpdateTimeEntryDto): TimeEntry {
    const timeEntry = this.findOne(id);

    Object.assign(timeEntry, {
      ...updateTimeEntryDto,
      updatedAt: new Date().toISOString(),
    });

    return timeEntry;
  }

  remove(id: string): TimeEntry {
    const timeEntry = this.findOne(id);

    this.timeEntries.splice(this.timeEntries.indexOf(timeEntry), 1);

    return timeEntry;
  }
}

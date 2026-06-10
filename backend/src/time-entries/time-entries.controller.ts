import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTimeEntryDto } from './dto/create-time-entry.dto';
import { UpdateTimeEntryDto } from './dto/update-time-entry.dto';
import { TimeEntriesService } from './time-entries.service';

@Controller('api/v1/time-entries')
export class TimeEntriesController {
  constructor(private readonly timeEntriesService: TimeEntriesService) {}

  @Post()
  create(@Body() createTimeEntryDto: CreateTimeEntryDto) {
    return {
      message: 'Time entry created',
      data: this.timeEntriesService.create(createTimeEntryDto),
    };
  }

  @Get()
  findAll() {
    return {
      message: 'Time entries retrieved',
      data: this.timeEntriesService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      message: 'Time entry retrieved',
      data: this.timeEntriesService.findOne(id),
    };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTimeEntryDto: UpdateTimeEntryDto,
  ) {
    return {
      message: 'Time entry updated',
      data: this.timeEntriesService.update(id, updateTimeEntryDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      message: 'Time entry deleted',
      data: this.timeEntriesService.remove(id),
    };
  }
}

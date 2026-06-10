import { Controller, Get } from '@nestjs/common';

import { TimeEntriesService } from './time-entries.service';

@Controller('api/v1/time-entries')
export class TimeEntriesController {
  constructor(private readonly timeEntriesService: TimeEntriesService) {}

  @Get()
  findAll() {
    return this.timeEntriesService.findAll();
  }
}

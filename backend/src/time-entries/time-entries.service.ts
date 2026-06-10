import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeEntriesService {
  findAll() {
    return {
      message: 'Time entries route active',
      data: [],
    };
  }
}

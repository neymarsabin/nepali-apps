import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData(): any {
    return this.dataService.getData();
  }
}

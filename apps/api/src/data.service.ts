import { Injectable } from '@nestjs/common';
import * as data from './data/data.json';

@Injectable()
export class DataService {
  getData(): any {
    try {
      return data;
    } catch (error) {
      console.error('Error reading data file:', error);
      throw error;
    }
  }
}

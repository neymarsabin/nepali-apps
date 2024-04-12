import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DataModule } from '../src/data.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DataModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/data (GET)', () => {
    return request(app.getHttpServer()).get('/data').expect(200);
  });
});

import request from 'supertest';
import {Test} from '@nestjs/testing';
import {AppModule} from '../src/app.module';
import {INestApplication} from '@nestjs/common';

describe('Status Controller', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        })
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it(`/GET ping`, () => {
        return request(app.getHttpServer())
            .get('/ping')
            .expect(200)
            .expect('pong');
    });

    afterAll(async () => {
        await app.close();
    });
});

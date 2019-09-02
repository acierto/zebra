import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import * as request from 'supertest';
import {AppModule} from '../src/app.module';
import {GET_ALL_PRODUCTS} from '../../client/src/queries/get-all-products';

describe('Product Service', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('Get all products', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .send({
                operationName: null,
                variables: {},
                query: GET_ALL_PRODUCTS.loc.source.body,
            })
            .expect(200)
            .expect({data: {products: []}});
    });
});

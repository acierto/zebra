import {Test, TestingModule} from '@nestjs/testing';
import 'jasmine';
import {LoggerService} from './logger.service';

describe('LoggerService', () => {
    let service: LoggerService;
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [LoggerService],
        }).compile();
        service = module.get<LoggerService>(LoggerService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

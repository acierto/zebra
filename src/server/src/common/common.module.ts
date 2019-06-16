import {Module} from '@nestjs/common';
import {LoggerService} from './services';

@Module({
    providers: [LoggerService],
    exports: [LoggerService],
})
export class CommonModule {
}

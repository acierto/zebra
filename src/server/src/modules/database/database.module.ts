import {Module} from '@nestjs/common';

import {CommonModule} from '../../common/common.module';

import {databaseProviders} from './database.providers';

@Module({
    imports: [CommonModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {
}

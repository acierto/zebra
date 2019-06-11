import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {photoProviders} from './product-providers';
import {ProductService} from './product-service';
import {ProductResolver} from './product-resolver';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...photoProviders,
        ProductService,
        ProductResolver
    ],
})
export class ProductModule {
}

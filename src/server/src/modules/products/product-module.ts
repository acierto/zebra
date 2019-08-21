import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {productProviders} from './product-providers';
import {ProductService} from './product-service';
import {ProductResolver} from './product-resolver';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...productProviders, // creates a connection to a product repository
        ProductService, // creates a transformation to DB entities and GraphQL objects
        ProductResolver // creates a layer to communicate with a database
    ],
})
export class ProductModule {
}

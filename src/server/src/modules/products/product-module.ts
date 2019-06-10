import {Module} from '@nestjs/common';
import {ProductResolver} from './product-resolver';

@Module({
    providers: [ProductResolver],
})
export class ProductModule {
}

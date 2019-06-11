import {Args, Query, Resolver} from '@nestjs/graphql';
import {Product} from './models/product';
import {ProductService} from './product-service';

@Resolver(of => Product)
export class ProductResolver {
    constructor(
        private readonly productService: ProductService,
    ) {
    }

    @Query(returns => Product, {nullable: true})
    async product(@Args('name') name: string): Promise<Product | undefined> {
        return await this.productService.find(name);
    }

    @Query(returns => [Product], {description: 'Get all the products from around the world '})
    async products(): Promise<Product[]> {
        return await this.productService.findAll();
    }
}

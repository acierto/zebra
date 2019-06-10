import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {plainToClass} from 'class-transformer';

import {createProducts} from './product-samples';
import {Product} from './models/product';
import {ProductInput} from './dto/productInput';

@Resolver(of => Product)
export class ProductResolver {
    private readonly items: Product[] = createProducts();

    @Query(returns => Product, {nullable: true})
    async product(@Args('name') name: string): Promise<Product | undefined> {
        return await this.items.find(product => product.name === name);
    }

    @Query(returns => [Product], {description: 'Get all the products from around the world '})
    async products(): Promise<Product[]> {
        return await this.items;
    }

    @Mutation(returns => Product)
    async addProduct(@Args('product') productInput: ProductInput): Promise<Product> {
        const product = plainToClass(Product, productInput);
        await this.items.push(product);
        return product;
    }
}

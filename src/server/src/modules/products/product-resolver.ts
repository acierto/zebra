import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Product} from './models/product';
import {ProductService} from './product-service';
import {ProductInput} from './dto/productInput';
import {plainToClass} from 'class-transformer';

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

    @Mutation(returns => Product)
    async addProduct(@Args('product') productInput: ProductInput): Promise<Product> {
        const product = plainToClass(Product, {
            description: productInput.description,
            name: productInput.name,
            price: productInput.price,
        });
        await this.productService.save(product);
        return product;
    }

    @Mutation(returns => Product)
    async removeProduct(@Args('name') name: string) {
        await this.productService.remove(name);
    }
}

import * as R from 'ramda';
import {Inject, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {ProductEntity} from './entity/product-entity';
import {Product} from './models/product';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private readonly productRepository: Repository<ProductEntity>,
    ) {
    }

    static transform(entity: ProductEntity): Product {
        const product = new Product();
        product.name = entity.name;
        product.description = entity.description;
        product.price = entity.price;
        return product;
    }

    async find(name: string): Promise<Product> {
        return await this.productRepository.findOne({name: name}).then(ProductService.transform);
    }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find().then(R.map(ProductService.transform));
    }
}

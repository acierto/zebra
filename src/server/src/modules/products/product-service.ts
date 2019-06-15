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

    static toView(entity: ProductEntity): Product {
        const product = new Product();
        product.id = entity.id;
        product.name = entity.name;
        product.description = entity.description;
        product.price = entity.price;
        return product;
    }

    static toEntity(product: Product): ProductEntity {
        const entity = new ProductEntity();
        entity.id = product.id;
        entity.name = product.name;
        entity.description = product.description;
        entity.price = product.price;
        return entity;
    }

    async find(name: string): Promise<Product> {
        return await this.productRepository.findOne({name: name}).then(ProductService.toView);
    }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find().then(R.map(ProductService.toView));
    }

    async save(product: Product): Promise<Product> {
        return await this.productRepository.save(product);
    }

    async remove(name: string) {
        const product = await this.find(name);
        await this.productRepository.remove(ProductService.toEntity(product));
    }
}

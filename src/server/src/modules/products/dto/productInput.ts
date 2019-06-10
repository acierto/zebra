import {Product} from '../models/product';
import {InputType, Field} from 'type-graphql';

@InputType()
export class ProductInput implements Partial<Product> {
    @Field()
    name: string;

    @Field({nullable: true})
    description?: string;

    @Field()
    price: number;
}

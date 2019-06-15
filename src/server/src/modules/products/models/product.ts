import {Field, ID, ObjectType} from 'type-graphql';

@ObjectType()
export class Product {
    @Field(type => ID)
    id: number;

    @Field()
    name: string;

    @Field({nullable: true})
    description?: string;

    @Field()
    price: number;
}

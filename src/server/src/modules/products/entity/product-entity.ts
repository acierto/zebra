import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('float')
    price: number;

}

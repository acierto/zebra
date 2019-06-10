import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class RecipeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

}

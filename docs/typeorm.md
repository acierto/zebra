---
id: typeorm
title: TypeORM
---

To not map every object’s field manually to a database table I decided to use some ORM solution
and I found that nice library. It supports a number of databases so that’s quite handy. 
Initial implementation is done for MySQL but with a little of effort it can be changed to another DB. 
In the next stage I’d like to connect other databases and show what you have to do for that.

```js
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
```

As you can see from this example from the project, it’s quite simple and straightforward way of annotating entity 
fields to map them on DB table. To define DB implementation and all required configuration, 
you’ll need to create ```ormconfig.json``` in the root of the module.

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "zebra",
  "password": "zebra",
  "database": "zebra",
  "synchronize": true,
  "logging": false,
  "entities": [
    "src/modules/**/entity/*-entity.ts"
  ],
  "migrations": [
    "src/modules/**/migration/*.ts"
  ],
  "subscribers": [
    "src/modules/**/subscriber/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/modules/**/entity",
    "migrationsDir": "src/modules/**/migration",
    "subscribersDir": "src/modules/**/subscriber"
  }
}
```

Apart from all credentials for database, you need to define here in what folders has to be scanned for 
entities/mutations/etc. That’s made with mind of performance especially when the project becomes monstrous size.



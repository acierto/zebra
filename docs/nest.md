---
id: nest
title: Nest.js
---

As a backend server Nest.js is used. It contains quite a lot of functionality which boost performance of the development.
 Nest server is started with command defined in package.json residing in server folder:
  ```ts-node -r tsconfig-paths/register src/main.ts``` 
Let's have a look at ```main.ts``` file:

```jsx
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3333);
}
bootstrap();
```

We are creating the main module of application (line 8) and waiting when application will be started by 
listening the defined port. This is an entry point of the backend part of the application.

```jsx
import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ProductModule} from './modules/products/product-module';
import {StatusController} from './statusController';

@Module({
    imports: [
        ProductModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        })
    ],
    controllers: [StatusController],
})
export class AppModule {
}
```

On that level we define a module which will work with products and the name of generated database schema for 
the entire application. Each specific part of database should be placed in it’s own module, 
then you’ll make your application granular enough to be split on logical parts. 
And after a time you can replace/remove outdated parts with less hassle. 
As at this point of time current implementation contains only one module — _ProductModule_.

```jsx
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {productProviders} from './product-providers';
import {ProductService} from './product-service';
import {ProductResolver} from './product-resolver';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...productProviders, // creates a connection to a product repository
        ProductService, // creates a transformation to DB entities and GraphQL objects
        ProductResolver // creates a layer to communicate with a database
    ],
})
export class ProductModule {
}
```

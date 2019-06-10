import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ProductModule} from './modules/products/product-module';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './modules/database/database.module';

@Module({
    imports: [
        ProductModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
        DatabaseModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

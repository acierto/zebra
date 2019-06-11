import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ProductModule} from './modules/products/product-module';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
    imports: [
        ProductModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

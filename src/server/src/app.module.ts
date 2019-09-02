import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ProductModule} from './modules/products/product-module';
import {StatusController} from './status-controller';

@Module({
    imports: [
        ProductModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql'
        })
    ],
    controllers: [StatusController]
})
export class AppModule {
}

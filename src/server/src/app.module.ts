import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ProductModule} from './modules/products/product-module';

@Module({
    imports: [
        ProductModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        })
    ]
})
export class AppModule {
}

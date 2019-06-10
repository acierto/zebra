import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {RecipesModule} from './modules/recipes/recipes.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
    imports: [
        RecipesModule,
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

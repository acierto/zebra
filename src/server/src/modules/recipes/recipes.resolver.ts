import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import {FieldResolver, Int, ResolverInterface, Root} from 'type-graphql';
import {plainToClass} from 'class-transformer';

import {createRecipeSamples} from './recipe-samples';
import {Recipe} from './models/recipe';
import {RecipeInput} from './dto/recipe.input';

@Resolver(of => Recipe)
export class RecipesResolver implements ResolverInterface<Recipe> {
    private readonly items: Recipe[] = createRecipeSamples();

    @Query(returns => Recipe, {nullable: true})
    async recipe(@Args('title') title: string): Promise<Recipe | undefined> {
        return await this.items.find(recipe => recipe.title === title);
    }

    @Query(returns => [Recipe], {description: 'Get all the recipes from around the world '})
    async recipes(): Promise<Recipe[]> {
        return await this.items;
    }

    @Mutation(returns => Recipe)
    async addRecipe(@Args('recipe') recipeInput: RecipeInput): Promise<Recipe> {
        const recipe = plainToClass(Recipe, {
            description: recipeInput.description,
            title: recipeInput.title,
            ratings: [],
            creationDate: new Date(),
        });
        await this.items.push(recipe);
        return recipe;
    }

    @FieldResolver()
    ratingsCount(
        @Root() recipe: Recipe,
        @Args('minRate') minRate: number,
    ): number {
        return recipe.ratings.filter(rating => rating >= minRate).length;
    }
}

import { Resolver, Query, FieldResolver, Ctx, Root, Args } from 'type-graphql';
import { DemoSet, RequestParams } from './typeDefs';
import { Context } from 'overlord-server';
import _ from 'lodash';

@Resolver((of) => DemoSet)
export class Resolvers {
    @Query((returns) => DemoSet)
    async DescribeDemo(@Ctx() ctx: Context, @Args() { Region }: RequestParams): Promise<DemoSet | undefined> {
        return {
            DemoItemSet: [
                {
                    Id: '1',
                },
                {
                    Id: '2',
                },
            ],
        };
    }
}

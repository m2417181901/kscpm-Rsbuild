import { Field, ObjectType, createUnionType, ArgsType } from 'type-graphql';

@ObjectType()
export class DemoSet {
    @Field((type) => [DemoItem], { nullable: true })
    DemoItemSet?: DemoItem[];
}

@ObjectType()
export class DemoItem {
    @Field({ nullable: true })
    Id?: string;
}

@ArgsType()
export class RequestParams {
    @Field()
    Region!: string;
}

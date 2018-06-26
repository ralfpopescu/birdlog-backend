const Query: { [string]: GraphQLFieldResolver<void, Context> } = {
  entry: (obj, args, context, info) => {
      return args.id
    }
}

const resolvers = { Query }

export default resolvers

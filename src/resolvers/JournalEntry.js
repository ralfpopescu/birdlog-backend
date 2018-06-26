const Query: { [string]: GraphQLFieldResolver<void, Context> } = {
  journalEntry: (obj, args, context, info) => {
      return args.id
    }
}

const resolvers = { Query }

export default resolvers

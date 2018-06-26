const Query: { [string]: GraphQLFieldResolver<void, Context> } = {
  journalEntry: (obj, args, context, info) => {
      return { month: 1,
              day: 2,
              year: 3,
              entry: 'wow'}
    }
}

const resolvers = { Query }

export default resolvers

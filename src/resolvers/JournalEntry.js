import { executeQuery } from '../dal/dal'
import { insertJournalEntry, getJournalEntry, getAllJournalEntries  } from '../queries/queries'

const Query = {
  journalEntry: (obj, args, context, info) => {
      console.log(args)
      return executeQuery(getJournalEntry)
    },
  journalEntries: async (obj, args, context, info) => {
      const q = await executeQuery(getAllJournalEntries)
      console.log('resolver')
      console.log(q.rows)
      return q.rows
    }
}

const Mutation = {
  createJournalEntry: (obj, args, context, info) => {
    console.log(args)
    return executeMutation(getAllJournalEntries)
  }
}

const resolvers = { Query }

export default resolvers

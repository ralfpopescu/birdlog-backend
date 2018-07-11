import { executeQuery } from '../dal/dal'
import { insertJournalEntry, getJournalEntry, getAllJournalEntries  } from '../queries/queries'

const Query = {
  journalEntry: (obj, args, context, info) => {
<<<<<<< HEAD
      console.log(args)
      return executeQuery(getJournalEntry)
    },
  journalEntries: async (obj, args, context, info) => {
      const q = await executeQuery(getAllJournalEntries)
      console.log('resolver')
      console.log(q.rows)
      return q.rows
=======
      return { month: 1,
              day: 2,
              year: 3,
              entry: 'wow'}
>>>>>>> 02d308b211a889f501255805085f82e2b3e407b0
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

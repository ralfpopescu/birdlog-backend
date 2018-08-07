import { executeQuery, executeMutation } from '../dal/dal'
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
  createJournalEntry: async (obj, args, context, info) => {
    const input = []
    console.log(args)
    input.push(args.input.month)
    input.push(args.input.day)
    input.push(args.input.year)
    input.push(args.input.entry)
    const m = await executeMutation(insertJournalEntry, input)
    console.log(m.rows[0])
    return { journalEntry: m.rows[0] }
  }
}

const resolvers = { Query, Mutation }

export default resolvers

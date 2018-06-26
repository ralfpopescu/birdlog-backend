export const insertJournalEntry = {
  name: 'insert_journal_entry',
  text: 'INSERT INTO journal_entries (month, day, year, entry) VALUES ($1, $2, $3, $4);',
  values: [1, 2, 3, 'hello']
}

export const getJournalEntry = {
  name: 'get_journal_entry',
  text: 'SELECT * FROM journal_entries'
}

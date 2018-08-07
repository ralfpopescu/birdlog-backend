export const insertJournalEntry = {
  name: 'insert_journal_entry',
  text: 'INSERT INTO journal_entry (month, day, year, entry) VALUES ($1, $2, $3, $4) RETURNING month, day, year, entry;'
}

export const getJournalEntry = {
  name: 'get_journal_entry',
  text: 'SELECT * FROM journal_entry;'
}

export const getAllJournalEntries = {
  name: 'get_all_journal_entries',
  text: 'SELECT * FROM journal_entry;'
}

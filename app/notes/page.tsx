import Link from 'next/link'

import CreateNote from './CreateNote'

const getNotes = async () => {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/test/records?page=1&perPage=30',
    // refetch data on every request; roughly equivalent to getServerSideProps in the past
    { cache: 'no-store' }
  )
  const data = await res.json()
  return data?.items as any[]
}

const NotesPage = async () => {
  const notes = await getNotes()

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>

      <CreateNote />
    </div>
  )
}

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {}
  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{created}</p>
      </div>
    </Link>
  )
}

export default NotesPage

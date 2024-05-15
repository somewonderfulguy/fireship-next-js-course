const getNode = async (noteId: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/test/records/${noteId}`,
    {
      // ISR (Incremental Static Regeneration) with a 10 second revalidation
      next: { revalidate: 10 }
    }
  )
  const data = await res.json()
  return data
}

const NotePage = async ({ params }: any) => {
  const note = await getNode(params.id)
  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>{note.created}</p>
      </div>
    </div>
  )
}

export default NotePage

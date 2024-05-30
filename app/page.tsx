import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Home = async () => {
  const session = await getServerSession()

  if (!session) {
    return redirect('/api/auth/signin')
  }

  return <main>Main Page</main>
}

export default Home

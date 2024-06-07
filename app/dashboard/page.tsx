import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { prisma } from '@/lib/prisma'
import { authOptions } from '../api/auth/[...nextauth]/route'

import ProfileForm from './ProfileForm'

const Dashboard = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  const currentUserEmail = session?.user?.email
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail ?? ''
    }
  })

  return (
    <>
      <h1>Dashboard</h1>
      <ProfileForm user={user} />
    </>
  )
}

export default Dashboard

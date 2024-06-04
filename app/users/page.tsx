import { prisma } from '@/lib/prisma'
import UserCard from '@/components/UserCard'

const Users = async () => {
  // for test purposes:
  // throw new Error('This is an error!')
  const users = await prisma.user.findMany()

  return (
    <div>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}

export default Users

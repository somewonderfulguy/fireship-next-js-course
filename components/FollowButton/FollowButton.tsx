import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import FollowClient from '../FollowClient'

type Props = {
  targetUserId: string
}

const FollowButton = async ({ targetUserId }: Props) => {
  const session = await getServerSession(authOptions)

  const currentUserId = await prisma.user
    .findUnique({
      where: { email: session?.user?.email! }
    })
    .then((user) => user?.id!)

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentUserId,
      followingId: targetUserId
    }
  })

  return (
    <FollowClient
      isFollowing={Boolean(isFollowing)}
      targetUserId={targetUserId}
    />
  )
}

export default FollowButton

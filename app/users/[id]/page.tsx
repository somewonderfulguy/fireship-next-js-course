import { Metadata } from 'next'

import FollowButton from '@/components/FollowButton'
import { prisma } from '@/lib/prisma'

type Props = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  return { title: `User profile of ${user?.name}` }
}

const UserProfile = async ({ params }: Props) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  const { name, bio, image } = user ?? {}

  return (
    <div>
      <h1>{name}</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        width={300}
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>

      <FollowButton targetUserId={params.id} />
    </div>
  )
}

export default UserProfile

'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export const SignInButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <>...</>
  if (status === 'authenticated')
    return (
      <>
        <Link href="/dashboard">
          <Image
            src={session?.user?.image ?? '/mememan.webp'}
            alt="Profile Picture"
            width={32}
            height={32}
          />
        </Link>
        <SignOutButton />
      </>
    )

  return <button onClick={() => signIn()}>Sign in</button>
}

export const SignOutButton = () => (
  <button onClick={() => signOut()}>Sign out</button>
)

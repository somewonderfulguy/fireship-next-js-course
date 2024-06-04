import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  const users = await prisma.user.findMany()

  console.log(users)

  return NextResponse.json(users)
}

'use server'

import  prisma  from '@/lib/prisma'

export async function saveResponse(formData: FormData) {
  const answer1 = formData.getAll('q1') as string[]
  const answer2 = formData.get('q2') as string
  const answer3 = Number(formData.get('q3'))
  const answer4 = formData.get('q4') as string
  const note = Number(formData.get('note'))

  await prisma.response.create({
    data: {
      answer1,
      answer2,
      answer3,
      answer4,
      note
    }
  })
}

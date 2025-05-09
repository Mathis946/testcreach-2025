import prisma  from '@/lib/prisma'



export default async function ReponsesPage() {
  const responses = await prisma.response.findMany({
    orderBy: { createdAt: 'desc' }
  })

  if (responses.length === 0) {
    return <p className="p-6">Aucune réponse enregistrée.</p>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Résultats du questionnaire</h1>

      {responses.map((res, i) => (
        <div key={res.id} className="border p-4 rounded shadow">
          <h2 className="font-semibold">Réponse #{i + 1}</h2>
          <p><strong>Question 1 :</strong> {res.answer1.join(', ')}</p>
          <p><strong>Question 2 :</strong> {res.answer2}</p>
          <p><strong>Question 3 :</strong> {res.answer3}</p>
          <p><strong>Question 4 :</strong> {res.answer4}</p>
          <p><strong>Note :</strong> {res.note} / 5</p>
          <p className="text-sm text-gray-500">Soumis le : {new Date(res.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

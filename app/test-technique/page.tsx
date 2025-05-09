import QuestionnairePage from '@/components/questionnaire';

import Link from 'next/link'


export default async function TestTechnique() {
  return (
    <main>
      <QuestionnairePage />
      <Link href="/response" className="text-600 underline">
         Voir les réponses enregistrées
      </Link>

    </main>
  );
}

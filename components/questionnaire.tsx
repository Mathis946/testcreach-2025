import { saveResponse } from '../app/action/save-response'

export default function QuestionnairePage() {

  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Questionnaire Epitech :</h1>
      <p className="mb-6">Ce questionnaire est anonyme et propre à soi-même.</p>

      <form action={saveResponse} className="space-y-6">

        {/* Question 1 */}
        <div className="border p-4 rounded-lg">
          <p className="font-semibold">Question 1 - Qu'appréciez-vous à Epitech ?</p>
          <p className="text-sm text-gray-500">Un ou plusieurs choix possibles</p>
          <fieldset className="mt-2 space-y-1">
            {[
              "La pédagogie autonome",
              "Le campus du Kremlin-Bicêtre",
              "L'équipe pédagogique",
              "L'entente entre étudiants",
              "Les after-school mis en place",
            ].map((option, idx) => (
              <div key={idx}>
                <input type="checkbox" id={`q1-${idx}`} name="q1" value={option} />
                <label htmlFor={`q1-${idx}`} className="ml-2">{option}</label>
              </div>
            ))}
          </fieldset>
        </div>

        {/* Question 2 */}
        <div className="border p-4 rounded-lg">
          <p className="font-semibold">Question 2 - Quelles seraient les améliorations que vous voudriez voir ?</p>
          <p className="text-sm text-gray-500">Meilleur suivi pédagogique, plus de soirées et activités étudiantes...</p>
          <input
            type="text"
            name="q2"
            className="w-full border p-2 mt-2"
            placeholder="Votre réponse"
          />
        </div>

        {/* Question 3 */}
        <div className="border p-4 rounded-lg">
          <p className="font-semibold">Question 3 - À combien d'années d'études étiez-vous avant de commencer votre formation ?</p>
          <p className="text-sm text-gray-500">Directement après le bac ? Écrivez 0.</p>
          <input
            type="number"
            name="q3"
            className="w-full border p-2 mt-2"
            placeholder="Entrer un chiffre"
          />
        </div>

        {/* Question 4 */}
        <div className="border p-4 rounded-lg">
          <p className="font-semibold">Question 4 - Aviez-vous des vues sur une autre école avant Epitech ?</p>
          <p className="text-sm text-gray-500">Si non, écrivez simplement "non".</p>
          <input
            type="text"
            name="q4"
            className="w-full border p-2 mt-2"
            placeholder="Nom d'une autre école ou non"
          />
        </div>

        {/* Question 5 */}
        <div className="border p-4 rounded-lg">
          <p className="font-semibold">Laissez-nous une note sur 5 !</p>
          <fieldset className="mt-2 flex space-x-4">
            {[1, 2, 3, 4, 5].map((val) => (
              <label key={val} className="flex items-center space-x-1">
                <input type="radio" name="note" value={val} />
                <span>{val}</span>
              </label>
            ))}
          </fieldset>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Envoyer mes réponses
        </button>
      </form>
    </div>
  )
}

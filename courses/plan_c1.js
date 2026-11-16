// ¡Aprende! — Programme « C1 en anglais d'ici avril 2027 » (généré le 14/11/2026).
// Affiché dans l'accueil (Parcours) et l'accueil anglais : semaine en cours, tâches du jour, objectifs.
const C1_PLAN = {
  start: "2026-11-16",            // lundi de la semaine 1
  end: "2027-05-02",              // dimanche de la semaine 24
  newPerDay: 15,                  // nouvelles cartes anglaises par jour
  daily: [                        // tâches du jour (id, libellé, minutes) — auto : cochées par l'appli
    { id: "rev",   label: "Réviser l'anglais jusqu'à 0 carte à revoir", min: 20, auto: true },
    { id: "unit",  label: "Parcours anglais : 3 étapes d'unité (Perso d'abord)", min: 15, auto: true },
    { id: "talk",  label: "Conversation (ChatGPT ou Gemini) sur le thème de la semaine", min: 25 },
    { id: "listen", label: "Écoute active : 15 min de série ou podcast US, en répétant 5 répliques", min: 15 },
  ],
  phases: [
    { from: 1,  to: 4,  icon: "🧱", name: "Fondations", goal: "Corriger tes erreurs qui reviennent : le S final, prétérit ou present perfect, les 3 T américains." },
    { from: 5,  to: 7,  icon: "🎄", name: "Fêtes : maintien", goal: "Ne pas perdre le rythme pendant les fêtes : révisions et 10 min de conversation par jour, séries en VO." },
    { from: 8,  to: 13, icon: "🌊", name: "Fluidité", goal: "Parler 2 minutes sans t'arrêter : connecteurs C1, phrasal verbs, raconter une histoire." },
    { from: 14, to: 19, icon: "🎯", name: "Nuance et précision", goal: "Hypothèses, désaccord poli, atténuer ou insister : ce qui distingue vraiment un C1." },
    { from: 20, to: 24, icon: "🏁", name: "Sprint C1", goal: "Simulations d'oral, débats, et le test final pour valider le C1." },
  ],
  // une ligne par semaine : focus, thème de conversation, cartes anglaises matures visées en fin de semaine, jalon éventuel
  weeks: [
    { focus: "Le S final : pluriels et possessifs (cousinZ, my dad'S side)", topic: "your family tree and your cousins", mature: 60, milestone: "Fais l'EF SET (50 min, gratuit) pour connaître ton point de départ" },
    { focus: "Prétérit pour les faits terminés : I watched, they scored, I told him", topic: "the last football match you watched", mature: 85 },
    { focus: "Present perfect pour le lien avec maintenant : I've been working on…", topic: "what you've been working on at EY lately", mature: 110 },
    { focus: "Les 3 T américains : flap, dropped, held (leçon « Tes points faibles »)", topic: "your favorite video games (Valorant, Kingdom Hearts…)", mature: 135 },
    { focus: "Maintien : révisions + 10 min de conversation par jour", topic: "your plans for the holidays", mature: 150 },
    { focus: "Maintien : une série en VO sans sous-titres français", topic: "a movie or series you watched over the holidays", mature: 165 },
    { focus: "Maintien : bilan de l'année en anglais", topic: "your goals for 2027", mature: 180 },
    { focus: "Connecteurs C1 : by and large, nonetheless, as a result (unités Adverbial phrases)", topic: "the pros and cons of remote work", mature: 210 },
    { focus: "Raconter une histoire au passé, 2 minutes sans t'arrêter", topic: "the craziest thing that happened to you on a trip", mature: 240 },
    { focus: "Phrasal verbs du quotidien : figure out, come up with, run into", topic: "a problem you solved at work and how", mature: 270 },
    { focus: "Rythme : écraser les petits mots, appuyer sur les mots forts", topic: "esports vs traditional sports", mature: 300 },
    { focus: "Décrire et comparer : way better, nowhere near as, the more… the more", topic: "Paris vs another city you know", mature: 330 },
    { focus: "Bilan mi-parcours", topic: "how your English has changed since November", mature: 360, milestone: "Refais l'EF SET : vise au moins 55 (B2 solide)" },
    { focus: "Conditionnels et hypothèses : if I had…, I would have…", topic: "what you would do with a year off", mature: 390 },
    { focus: "Exprimer un désaccord poli : I see your point, but…", topic: "a debate: should AI replace junior consultants?", mature: 420 },
    { focus: "Atténuer et nuancer (hedging) : arguably, to some extent, it seems that", topic: "whether data science is overhyped", mature: 450 },
    { focus: "Insister et mettre en relief : What I really mean is…, It's not that… it's that…", topic: "the best advice you've ever received", mature: 480 },
    { focus: "Expressions idiomatiques : the ball's in your court, cut corners, a long shot", topic: "your career plans for the next two years", mature: 510 },
    { focus: "Parler de chiffres et de tendances : a sharp rise, roughly, twice as many", topic: "explain a data project to someone non-technical", mature: 540 },
    { focus: "Simulation d'oral : 2 minutes de présentation, puis questions", topic: "present yourself as in a job interview", mature: 570 },
    { focus: "Débat : défendre une position, puis l'inverse", topic: "a debate: is social media good for young people?", mature: 600 },
    { focus: "Réagir vite et naturellement (no way, fair enough, that makes sense)", topic: "small talk: weekend, news, sports, food", mature: 630 },
    { focus: "Révision générale des points faibles relevés par Gemini", topic: "a free conversation: ask Gemini to push you on your weak spots", mature: 660 },
    { focus: "Semaine du test", topic: "a mock C1 speaking exam", mature: 690, milestone: "Test final EF SET : vise 61 ou plus (C1)" },
  ],
  // Rapport à format fixe, lu par js/oral-reports.js (bouton « Rapport » du programme)
  reportFormat: "=== RAPPORT APRENDE ===\nDATE: YYYY-MM-DD\nTHEME: the topic, in a few words\nNIVEAU: A2, B1, B2, C1 or C2 for this session\nPOINTS FORTS:\n- ...\nERREURS:\n- what I said => correct version | the rule, one short sentence in French\nA DIRE PLUTOT:\n- my unnatural phrasing => natural American phrasing | why, in French\nMOTS FRANCAIS:\n- the French word I used => English equivalent | example sentence\nVOCABULAIRE:\n- useful expression for this topic = French translation | example sentence\nPRONONCIATION:\n- word or sound : advice in French\nNON VERIFIE:\n- what you could not check\nPRIORITE: the single most important thing to work on next time\n=== FIN ===",
  reportRules: "Plain text only: no markdown, no bold, no tables. Keep the section names exactly as written, in this order. One item per line, starting with \"- \". Write \"- aucun\" in an empty section. At most 8 items per section. Explanations in French, examples in English.",
  // ChatGPT : conversation écrite ou vocale en direct ; on écrit RAPPORT à la fin
  chatPrompt: "Let's have a 20-minute conversation in American English about {topic}. My level: conversational, but I struggle with fluency and spontaneous phrasing. This week I'm working on: {focus}. Make me talk as much as possible: ask open questions and follow-up questions, and keep your turns short. Do not correct me during the conversation. If I don't know a word, I may say it in French: keep going, and note every French expression I use. My priorities: the final S (plurals and possessives), American English stress timing, fewer hesitations and repetitions, more active vocabulary, and paraphrasing naturally when I'm missing a word. When I write RAPPORT, stop the conversation and give me a report in French, in exactly this format:\n\n{format}\n\n{rules} Clearly separate what you actually observed from what you could not check.",
  // Gemini : on envoie un enregistrement audio avec cette consigne
  audioPrompt: "Here is an audio recording of me speaking American English about {topic}. This week I'm working on: {focus}. Listen to the whole recording. My priorities: the final S (plurals and possessives), American English stress timing, fewer hesitations and repetitions, more active vocabulary, and paraphrasing naturally when I'm missing a word. Then give me a report in French, in exactly this format:\n\n{format}\n\n{rules} In PRONONCIATION, name the exact word and the sound (final S, flap T, word stress). Only report what you actually hear in the recording; put everything else under NON VERIFIE.",
};

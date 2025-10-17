// lib/bible-verses.ts

const verses: string[] = [
    // 🌟 Palabras de Jesús
    "Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre. (Juan 6:35)",
    "Yo soy la luz del mundo; el que me sigue no andará en tinieblas. (Juan 8:12)",
    "En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo. (Juan 16:33)",
    "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí. (Juan 14:6)",
    "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. (Mateo 11:28)",
    "Amarás al Señor tu Dios con todo tu corazón, y a tu prójimo como a ti mismo. (Mateo 22:37-39)",
    "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. (Mateo 7:7)",
  
    // 📖 Proverbios
    "Confía en el Señor de todo corazón, y no en tu propia prudencia. (Proverbios 3:5)",
    "Honra al Señor con tus bienes y con las primicias de todos tus frutos. (Proverbios 3:9)",
    "El temor del Señor es el principio de la sabiduría. (Proverbios 1:7)",
    "El justo florecerá como la palmera; crecerá como cedro en el Líbano. (Salmos 92:12)",
    "El que guarda su boca guarda su alma. (Proverbios 13:3)",
  
    // 🎵 Salmos
    "El Señor es mi pastor; nada me faltará. (Salmos 23:1)",
    "Este es el día que hizo el Señor; nos gozaremos y alegraremos en él. (Salmos 118:24)",
    "El Señor es mi luz y mi salvación; ¿de quién temeré? (Salmos 27:1)",
    "Aunque ande en valle de sombra de muerte, no temeré mal alguno. (Salmos 23:4)",
    "Bueno es alabarte, oh Señor, y cantar salmos a tu nombre. (Salmos 92:1)",
    "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. (Salmos 91:1)",
    "Clama a mí, y yo te responderé. (Jeremías 33:3)",
  
    // ✨ Otros
    "Todo lo puedo en Cristo que me fortalece. (Filipenses 4:13)",
    "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien. (Romanos 8:28)",
    "Porque de tal manera amó Dios al mundo que ha dado a su Hijo unigénito. (Juan 3:16)",
    "Estad siempre gozosos. Orad sin cesar. Dad gracias en todo. (1 Tesalonicenses 5:16-18)",
    "No se turbe vuestro corazón; creéis en Dios, creed también en mí. (Juan 14:1)"
  ];
  
  export function getRandomVerse(): string {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  }
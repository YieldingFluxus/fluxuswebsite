// @ts-ignore
export let lang = (localStorage.getItem('lang') || navigator.language || navigator.userLanguage || 'en-US').toLowerCase()

type i18nData = Record<string,string>

export const langData: Record<string, Partial<i18nData>> = {
  de: {
    // Main Page
    'A Fresh': 'Ein Besseres',
    'Execution Experience.': 'Exploiting Erlebnis.',
    'Unrivaled Power, Unbeatable Pricepoint': 'Unübertroffene Leistung, Unschlagbarer Preis',
    'Download now': 'Jezt Herunterladen',
    'Scroll down for more': 'Nach unten gibt\'s mehr',
    'A Minimalistic UI': 'Ein Minimalistisches UI',
    'Useless features shouldn\'t take up your entire screen.': 'Nutzlose features sollen nicht extrem viel platz verbrauchen.',
    'Only the most essential features are on the main UI - anything extra is just one more click away.': 'Nur die essentials sind auf dem main UI - alles anderes ist nur ein weiteren click weg.',
    'Fast': 'Schnell',
    'Advanced IDE': 'Fortschrittliche IDE',
    'Secure & Undetectable': 'Sicher & Undetektiert',
    'Reliable': 'Zuverlässig',
    'Reputable': 'Anerkannt',
    'Fast Updates': 'Schnelle Updates',
    'On all supported platforms, Fluxus performs significantly better than the competition.': 'Auf allen unterstützten Plattformen liefert Fluxus eine deutlich bessere Leistung als andere Executor.',
    'The Fluxus IDE is amongst one of the most advanced on the market.': 'Die Fluxus-IDE ist eine der am weitesten fortgeschrittenen auf dem Markt.',
    'We have a great track record of patching all known vulnerabilities & detections quickly.': 'Wir haben eine großartige Erfolgsquote bei der schnellen Behebung aller bekannten Schwachstellen und Detektionen.',
    'Our Advanced Execution Core is extremely reliable, allowing you to execute most scripts.': 'Unser komplexer Ausführungskern ist äußerst zuverlässig und ermöglicht die einwandfreie Ausführung der meisten Scripts.',
    'During the past YEARCOUNT years, we\'ve established a reputation as industry leaders.': 'Innerhalb den Letzten YEARCOUNT Jahren haben wir eine Reputation als Industry Leaders erarbeitet',
    'No more waiting for updates: Most of the time, Fluxus updates within under an hour.': 'Nie mehr für Updates warten: Fluxus updatet fast immer innerhalb unter einer Stunde!',
    '​​​​​​':'Das',
    '​​​​​T​h​e': 'Beste', // input text contains ZWSPs to avoid conflicts
    'executor for mobile.': 'Executor für Android.',
    'Fluxus Android brings the Premium Executor': 'Fluxus Android liefert das Premium Executor-Erlebnis',
    'Experience to your pocket. For free.': 'direkt in deine Tasche. 100% Gratis.',
    'Get Fluxus Android': 'Sofort Probieren',
    // Download Page
    'Download Fluxus Windows/Linux': 'Fluxus für Windows Herunterladen',
    'Note: The above contain advertisements. Please be aware of these before you continue.': 'Hinweis: Die folgenden Seiten enthalten Werbung. Bitte beachten Sie diese, bevor Sie fortfahren.',
    'Need Help?': 'Brauchen Sie Hilfe?',
    'https://www.youtube.com/embed/MqBjGEo289Q': 'https://www.youtube.com/embed/MqBjGEo289Q', // Help Video
  },
  en: {
    '​​​​​T​h​e': 'The'
  }
}

if (!langData[lang] && langData[lang.split('-').shift()])
  lang = lang.split('-').shift()

const hasTransl = !!langData[lang];
langData[lang]=langData[lang] ?? {}

export const translate = (str: string) => {
  const translated = langData[lang][str];
  if (!translated && hasTransl) console.warn(`No translation for '${str}'`);
  return translated ?? str
}
export default translate
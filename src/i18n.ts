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
    '​​​​​​':'Das', // Text before the 'The' in the android text.
    '​​​​​T​h​e': 'Beste', // input text contains ZWSPs to avoid conflicts. This is the underlined text. Should emphasize that this is the go-to for Android Executors.
    'executor for mobile.': 'Executor für Android.', // Text after the 'The'
    'Fluxus Android brings the Premium Executor': 'Fluxus Android liefert das Premium Executor-Erlebnis',
    'Experience to your pocket. For free.': 'direkt in deine Tasche. 100% Gratis.',
    'Get Fluxus Android': 'Sofort Probieren',
    // Download Page
    'Download Fluxus Windows/Linux': 'Fluxus für Windows Herunterladen',
    'Note: The above contain advertisements. Please be aware of these before you continue.': 'Hinweis: Die folgenden Seiten enthalten Werbung. Bitte beachten Sie diese, bevor Sie fortfahren.',
    'Need Help?': 'Brauchen Sie Hilfe?',
    'https://www.youtube.com/embed/MqBjGEo289Q': 'https://www.youtube.com/embed/MqBjGEo289Q', // Help Video
    // Android Page
    'A Unique Mobile Experience.': 'Ein Einzigartiges Mobile Erlebnis.',
    'Crafted by industry leaders, Fluxus Android is the ultimate Roblox Exploiting experience for your pocket.': 'Von Industrieführern entwickelt, Fluxus Android ist das ultimative Roblox Exploiting-Erlebnis für die Hosentasche.',
    'Features': 'Besonderheiten',
    'Why pick Fluxus Android?': 'Warum Fluxus Android?',
    'Performant': 'Leistungsfähig',
    'Fluxus Android is powered by the Luau Source directly, allowing us to reach insanely fast performance.': 'Fluxus Android wird mit dem besten Execution Kern auf dem Markt betrieben, sodass wir eine extrem schnelle Leistung erreichen.',
    'Extensive APIs': 'Umfangsreiche APIs',
    'Fluxus has many custom APIs, allowing you to do things like integrate into the main UI. You can click here for documentation.': 'Fluxus enthält viele einzelartige APIs, die es Ihnen erleichtern, bessere Scripts zu entwickeln.',
    'Short Key System': 'Kurzes Key-System',
    'Our Key System consists of only three linkvertises, and keys last 24 hours! You can also buy Premium to remove the key system!': 'Unser Keysystem besteht aus nur drei Linkwerbeseiten! Sie können auch Premium kaufen, um das Key System komplett zu entfernen!',
    'UNC-Support': 'UNC-Support',
    'We support a significant portion of UNC; this means most modern scripts will work out of the box!': 'Wir unterstützen einen großen Teil von UNC; das bedeutet, dass die meisten modernen Scripts direkt nach der Installation funktionieren!',
    'Fluxus Quality': 'Fluxus Qualität',
    'We make sure every product of ours is extremely high-quality, giving you the ultimate experience.': 'Wir stellen sicher, dass jedes unserer Produkte von höchster Qualität ist, um Ihnen das ultimative Erlebnis zu ermöglichen.',
    'No more waiting for updates; Most of the time, Fluxus Android updates within under an hour.': 'Nie wieder auf Updates warten: Fluxus Android aktualisiert sich normalerweise innerhalb von unter einer Stunde.',
    'Installation': 'Installation',
    'Instructions': 'Anleitungen',
    'Help': 'Hilfe',
    'Having issues with Fluxus Android? Try the': 'Probleme mit der Fluxus Android Installation? Probieren Sie die',
    'Legacy Installation': 'Legacy Installation',
    'P.S. You can buy premium': 'P.S. Sie können Premium',
    'in our discord': 'in unserem Discord',
    'to skip the key system.': 'kaufen, um das Key System zu überspringen.',
    'Below, you can find a video with instructions on downloading Fluxus Android.': 'Hier können Sie ein Video mit Anleitungen finden für die Fluxus Android Installation.',
    'Scroll up for links': 'Nach oben für die links.',
    'https://www.youtube.com/embed/d6V2rHDSJM4': 'https://www.youtube.com/embed/d6V2rHDSJM4',
    // titlebar
    'Download': 'Herunterladen',
    'Android': 'Android',
    'Discord': 'Discord',
    // legacy install
    'Is Fluxus Android not working?': 'Funktioniert die Fluxus Legacy Installation nicht?',
    'Try this legacy installation method instead.': 'Versuchen Sie diese "Legacy"-Installationsmethode',
    'Installation Instructions': 'Anleitungen',
    'Resources': 'Ressourcen',
    'Make sure you delete the arm64-v8a folder and install libFluxusAndroid.so into armeabi-v7a! If you forget this, your application will crash.': 'Stellen Sie sicher, dass Sie den Ordner arm64-v8a löschen und libFluxusAndroid.so in armeabi-v7a installieren! Wenn Sie dies vergessen, wird Ihr Roblox abstürzen.',
    'P.S. If you need help': 'P.S. Falls Sie Hilfe brauchen, können sie ein Ticket öffnen in unserem',
    'join our discord server': 'Discord Server'
  },
  nl: {
    // Main Page
    'A Fresh': '',
    'Execution Experience.': '',
    'Unrivaled Power, Unbeatable Pricepoint': '',
    'Download now': '',
    'Scroll down for more': '',
    'A Minimalistic UI': '',
    'Useless features shouldn\'t take up your entire screen.': '',
    'Only the most essential features are on the main UI - anything extra is just one more click away.': '',
    'Fast': '',
    'Advanced IDE': '',
    'Secure & Undetectable': '',
    'Reliable': '',
    'Reputable': '',
    'Fast Updates': '',
    'On all supported platforms, Fluxus performs significantly better than the competition.': '',
    'The Fluxus IDE is amongst one of the most advanced on the market.': '',
    'We have a great track record of patching all known vulnerabilities & detections quickly.': '',
    'Our Advanced Execution Core is extremely reliable, allowing you to execute most scripts.': '',
    'During the past YEARCOUNT years, we\'ve established a reputation as industry leaders.': '', // YEARCOUNT is automatically replaced with the amount of years since 2019
    'No more waiting for updates: Most of the time, Fluxus updates within under an hour.': '',
    '​​​​​​':'', // Text before the 'The' in the android text.
    '​​​​​T​h​e': '', // input text contains ZWSPs to avoid conflicts. This is the underlined text. Should emphasize that this is the go-to for Android Executors.
    'executor for mobile.': '', // Text after the 'The'
    'Fluxus Android brings the Premium Executor': '',
    'Experience to your pocket. For free.': '',
    'Get Fluxus Android': '',
    // Download Page
    'Download Fluxus Windows/Linux': '',
    'Note: The above contain advertisements. Please be aware of these before you continue.': '',
    'Need Help?': '',
    'https://www.youtube.com/embed/MqBjGEo289Q': 'https://www.youtube.com/embed/MqBjGEo289Q', // Help Video
    // Android Page
    'A Unique Mobile Experience.': '',
    'Crafted by industry leaders, Fluxus Android is the ultimate Roblox Exploiting experience for your pocket.': '',
    'Features': '',
    'Why pick Fluxus Android?': '',
    'Performant': '',
    'Fluxus Android is powered by the Luau Source directly, allowing us to reach insanely fast performance.': '',
    'Extensive APIs': '',
    'Fluxus has many custom APIs, allowing you to do things like integrate into the main UI. You can click here for documentation.': '',
    'Short Key System': '',
    'Our Key System consists of only three linkvertises, and keys last 24 hours! You can also buy Premium to remove the key system!': '',
    'UNC-Support': 'UNC-Support',
    'We support a significant portion of UNC; this means most modern scripts will work out of the box!': '',
    'Fluxus Quality': '',
    'We make sure every product of ours is extremely high-quality, giving you the ultimate experience.': '',
    'No more waiting for updates; Most of the time, Fluxus Android updates within under an hour.': '',
    'Installation': '',
    'Instructions': '',
    'Help': '',
    'Having issues with Fluxus Android? Try the': '',
    'Legacy Installation': '',
    'P.S. You can buy premium': '',
    'in our discord': '',
    'to skip the key system.': '',
    'Below, you can find a video with instructions on downloading Fluxus Android.': '',
    'Scroll up for links': '',
    'https://www.youtube.com/embed/d6V2rHDSJM4': 'https://www.youtube.com/embed/d6V2rHDSJM4',
    // titlebar
    'Download': '',
    'Android': '',
    'Discord': '',
    // legacy install
    'Is Fluxus Android not working?': '',
    'Try this legacy installation method instead.': '',
    'Installation Instructions': '',
    'Resources': '',
    'Make sure you delete the arm64-v8a folder and install libFluxusAndroid.so into armeabi-v7a! If you forget this, your application will crash.': '',
    'P.S. If you need help': '',
    'join our discord server': ''
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
  if (!translated && hasTransl && lang !== 'en') console.warn(`No translation for '${str}'`);
  return translated ?? str
}
export default translate
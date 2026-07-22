export const metadata = {
  metadataBase: new URL('https://luka-web-eta.vercel.app'),
  title: 'LUKA! Running＆Workout | マラソン完走・ダイエット・ボディメイクに特化したパーソナルランニング指導',
  description:
    '元日本選手権出場トレーナーによるマンツーマンランニング指導。マラソン完走・ダイエット・ボディメイクに特化。皇居周り・隅田川周りで対面指導＆オンラインコーチングも対応。LINEで申し込み受付中。',
  keywords:
    '皇居ランニング,パーソナルトレーニング,ランニング指導,マラソン完走,ボディメイク,ダイエット,食事指導,東京ランニング,皇居,隅田川',
  verification: {
  google: '00x4-aSaw32Fukvr5L8fFL5e6VOehHFAfv-XAtmsBEQ',
},
  openGraph: {
    title: 'LUKA! Running＆Workout | マラソン完走・ダイエット・ボディメイクに特化したパーソナルランニング指導',
    description:
      '元日本選手権出場トレーナーによるマンツーマンランニング指導。マラソン完走・ダイエット・ボディメイクに特化。皇居周り・隅田川周りで対面指導＆オンラインコーチングも対応。LINEで申し込み受付中。',
    url: 'https://luka-web-eta.vercel.app',
    siteName: 'LUKA! Running＆Workout',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUKA! Running＆Workout | マラソン完走・ダイエット・ボディメイクに特化したパーソナルランニング指導',
    description:
      '元日本選手権出場トレーナーによるマンツーマンランニング指導。マラソン完走・ダイエット・ボディメイクに特化。皇居周り・隅田川周りで対面指導＆オンラインコーチングも対応。LINEで申し込み受付中。',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#fff', color: '#111' }}>
        {children}
      </body>
    </html>
  );
}

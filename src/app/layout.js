import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] })

// metadata を削除または修正 (必要に応じて)
// export const metadata = {
//   title: 'Ryo Yoneyama',
//   description: 'Portfolio site',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        {/* 他のheadタグもここに追加 */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
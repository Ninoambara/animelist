import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animelist',
  description: 'Build by Nino Ambara',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>ini adalah navbar</h1>
        {children}
        </body>
    </html>
  )
}

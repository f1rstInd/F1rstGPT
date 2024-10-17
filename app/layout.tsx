import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/Header'
import ThemesProvider from '@/providers/ThemesProvider'
import '@/styles/globals.scss'
import '@/styles/theme-config.css'
import Footer from '@/components/Footer' // Client component that handles useEffect

export const metadata = {
  title: {
    default: 'F1RST X',
    template: `%s - ChatGPT Lite`
  },
  description: 'Your Business F1rst AI',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemesProvider>
          <Header />
          {children}
          <Toaster />
          <Footer /> {/* Move footer logic here */}
        </ThemesProvider>
        <Analytics />
      </body>
    </html>
  )
}

 

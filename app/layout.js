import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geo Tag Photos | Free GeoImgr Online',
  description: 'We provide free online web tool for geotagging photos, writing GPS coordinates for JPEG, PNG and WEBP images.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-lg m-auto sm:px-10 px-4" data-new-gr-c-s-check-loaded="14.1136.0" data-gr-ext-installed="" >{children}</body>
    </html>
  )
}

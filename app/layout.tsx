import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristian Studio21',
  description: 'Portafolio de desarrollo web moderno con React, Next.js y tecnologías de vanguardia.',
  keywords: ['desarrollador', 'react', 'nextjs', 'typescript', 'portafolio'],
  authors: [{ name: 'Tu Nombre' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="images/favicon.png" />
        <link rel="apple-touch-icon" href="images/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          {/* Cursor personalizado - COMENTADO
          <div id="cursor-trail" className="cursor-trail" />
          */}
          
          {/* Contenido principal */}
          <main className="relative z-10">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
              </div>
            }>
              {children}
            </Suspense>
          </main>
        </div>
        
        {/* Script para cursor personalizado */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                const cursor = document.getElementById('cursor-trail');
                if (cursor) {
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top = e.clientY + 'px';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
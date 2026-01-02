export const metadata = {
  title: 'Voyage d\'Oran à Vietnam - Planificateur de Voyage',
  description: 'Planifiez votre voyage d\'Oran, Algérie au Vietnam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}

import {ReactNode} from 'react'

import {GlobalStyle} from 'styles'

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Alpha League'
}

export default function RootLayout(
  {children}: {children: ReactNode}
) {
  return (
    <html lang={'en'}>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
'use client'

import { Toaster, type ToasterProps, TooltipProvider } from '@zxffo/ui'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider, useTheme } from 'next-themes'
import * as React from 'react'

type ProvidesProps = {
  children: React.ReactNode
}

const Providers = (props: ProvidesProps) => {
  const { children } = props
  const { theme = 'system' } = useTheme()

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <SessionProvider>
        <TooltipProvider>
          {children}
          <Toaster
            toastOptions={{
              duration: 2500
            }}
            visibleToasts={5}
            theme={theme as ToasterProps['theme']}
            expand
          />
        </TooltipProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default Providers

import { createContext, useContext, useMemo } from 'react'
import { ThemeProvider as ThemeProviderSC } from 'styled-components'

import { themes, ThemeOption, ThemeType } from '@/global/themes'

const VALID_THEMES = Object.keys(themes) as ThemeOption[]

const ThemeContext = createContext({
  theme: themes.dark as ThemeType,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useMemo(() => {
    const envTheme = import.meta.env.VITE_THEME as ThemeOption | undefined

    if (envTheme && VALID_THEMES.includes(envTheme)) {
      return themes[envTheme]
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? themes.dark : themes.light
  }, [import.meta.env.VITE_THEME])

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProviderSC theme={theme}>{children}</ThemeProviderSC>
    </ThemeContext.Provider>
  )
}

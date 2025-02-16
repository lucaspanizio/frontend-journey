import { Provider as ReduxProvider } from 'react-redux'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { GlobalStyle, shouldForwardProp } from '@/global/styles'
import { theme } from '@/global/theme'
import { AppRoutes } from '@/routes'
import { CounterProvider as ContextProvider } from '@/store/context/counter'
import { store } from '@/store/redux'

export function App() {
  return (
    <StyleSheetManager enableVendorPrefixes shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContextProvider>
          <ReduxProvider store={store}>
            <AppRoutes />
          </ReduxProvider>
        </ContextProvider>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

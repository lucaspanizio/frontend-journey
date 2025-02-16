import { Provider as ReduxProvider } from 'react-redux'
import { StyleSheetManager } from 'styled-components'

import { GlobalStyle, shouldForwardProp } from '@/global/styles'
import { AppRoutes } from '@/routes'
import { CounterProvider } from '@/store/context/counter'
import { ThemeProvider } from '@/store/context/theme'
import { store } from '@/store/redux'

export function App() {
  return (
    <StyleSheetManager enableVendorPrefixes shouldForwardProp={shouldForwardProp}>
      <ThemeProvider>
        <GlobalStyle />
        <CounterProvider>
          <ReduxProvider store={store}>
            <AppRoutes />
          </ReduxProvider>
        </CounterProvider>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

import { Provider as ReduxProvider } from 'react-redux';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { CounterProvider as ContextProvider } from '@/store/context/counter';
import { store } from '@/store/redux';
import { AppRoutes } from '@/routes';
import { theme } from '@/global/theme';
import { GlobalStyle, shouldForwardProp } from '@/global/styles';

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
  );
}

import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CounterProvider as ContextProvider } from '@/store/context/counter';
import { store } from '@/store/redux';
import { Routes } from '@/routes';
import { GlobalStyle } from '@/global/styles';
import { theme } from '@/global/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ReduxProvider>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;

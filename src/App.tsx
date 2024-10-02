import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './global/styles';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './global/theme';
import { CounterProvider } from './store/context/counter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CounterProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;

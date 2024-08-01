import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './global/styles';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './global/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

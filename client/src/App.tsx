import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette:{
    primary:{
      main:'#FF9358',
      contrastText:'#ffffff'
    }
  },
  typography:{
    fontFamily:'"Public Sans", sans-serif'
  }
})

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;

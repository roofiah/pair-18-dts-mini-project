import './App.css';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Footer from './components/footer/Footer';
import Theme from './components/Theme'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <NavBar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;

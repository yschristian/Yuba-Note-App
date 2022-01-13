import './App.css';
import ThemeContextProvider from './component/themeContext';
import MainApp from './component/mainApp';

function App() {
  return (
    <ThemeContextProvider>
      <MainApp />
    </ThemeContextProvider>
  );
}

export default App;

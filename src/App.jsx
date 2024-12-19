import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';

function App() {
  const [mode, setMode] = useState('light'); // 'light', 'dark', or 'red'
  const [alert, setAlert] = useState(null); // State for alert messages

  const toggleMode = (newMode) => {
    setMode(newMode);
    const message = newMode === 'light' ? 'Light mode has been enabled!' :
                    newMode === 'dark' ? 'Dark mode has been enabled!' :
                    'Red mode has been enabled!';
    showAlert(message);
  };

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null); // Clear the alert after 3 seconds
    }, 3000);
  };

  const appStyle = {
    backgroundColor: mode === 'dark' ? '#121212' : mode === 'red' ? '#ffcccc' : '#f8f9fa',
    color: mode === 'dark' || mode === 'red' ? 'white' : 'black',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar title="My App" aboutText="About MyApp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Textform heading="Enter your text" mode={mode} />} />
            <Route exact path="/about" element={<Aboutus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

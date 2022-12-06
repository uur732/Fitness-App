import './App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


function App() {
  return (
    <Box width="400px" sx={ {  width: {xl: '1366px' }}} m="auto">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
     <Footer />
    </Box>
  );
}

export default App;

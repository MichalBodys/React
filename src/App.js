
import Container from './components/Container/Container';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';

const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
</main>
  );
};

export default App;
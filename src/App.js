
import Container from './components/Container/Container';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import List from './components/List/List'
import { updateSearchString } from './redux/store';
import { useDispatch } from 'react-redux';


const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/list/:listId" element={<List/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
</main>
  );
};

export default App;
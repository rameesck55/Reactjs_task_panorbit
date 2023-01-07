
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Post from './pages/Post/Post';
import Profile from './pages/Profile/Profile';
import ToDo from './pages/ToDo/ToDo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Gallery'} element={<Gallery />} />
          <Route path={'/Post'} element={<Post />} />
          <Route path={'/Profile'} element={<Profile />} />
          <Route path={'/ToDo'} element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

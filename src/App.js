import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login/Login';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebaseConfiguration';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }
  return (
      <Router>
        <nav>
          <div className='logo'>Logo</div>
          <div>
          <Link to='/'>Home</Link>
          {!isAuth ? <Link to='/login'>Login</Link> : 
          <>
          <Link to='/createpost'>Create Post</Link>
          <button onClick={signUserOut}>Log out</button>
          </>}
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home isAuth={isAuth}/>} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
          <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
        </Routes>
      </Router>
  );
}

export default App;

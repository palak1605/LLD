import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Body from './Components/Body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from './Components/Team';
import About from './Components/About';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Accordian from './Components/Accordian';
import Comment from './Components/comments/Comment';
import ImageSlider from './Components/image-slider/ImageSlider';
import Pagination from './Components/Pagination/Pagination';
import LiveChat from './Components/live-chat/Live Chat';
import SearchUi from './Components/search-ui/SearchUi';
function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
    <header
  style={{
    fontSize: '24px',  // equivalent to text-2xl
    fontWeight: 'bold', // equivalent to font-bold
    padding: '20px 0',  // equivalent to py-5
    backgroundColor: 'black', // equivalent to bg-black
    color: 'white', // equivalent to text-white
    textAlign: 'center', // equivalent to text-center
    display: 'flex', // equivalent to flex
    alignItems: 'center', // to center vertically
    justifyContent: 'space-between', // to space out nav and select
  }}
>
  Hello World
  <nav
    style={{
      padding: '0 80px', // equivalent to px-20
      margin: '8px', // equivalent to m-2
      width: '1200px', // equivalent to w-[1200px]
      display: 'flex', // equivalent to flex
      justifyContent: 'space-between', // equivalent to justify-between
      fontSize: '18px', // equivalent to text-lg
    }}
  >
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/accordion">Accordion </a>
    <a href="/comments">Nested Comments </a>
    <a href="/image-slider">Image Slider </a>
    <a href="/pagination">Pagination </a>
    <a href="/live-chat">Live Chat </a>
    <a href="/search-ui">Search UI </a>
    <a href="/team">Team</a>
    <a href="/login">Login</a>
  </nav>
  <select
    value={lang}
    onChange={(e) => setLang(e.target.value)}
    style={{
      marginLeft: 'auto', // to push the select to the far right
    }}
  >
    <option value="en">English</option>
    <option value="hi">Hindi</option>
    <option value="sp">Spanish</option>
    <option value="ru">Russian</option>
  </select>
</header>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/about" element={<About lang={lang} />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/accordion" element={<Accordian />}></Route>
          <Route path="/comments" element={<Comment />}></Route>
          <Route path="/image-slider" element={<ImageSlider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/live-chat" element={<LiveChat />}></Route>
          <Route path="/search-ui" element={<SearchUi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

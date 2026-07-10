import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';

export default function App(){
return <>
<nav><b>DW</b><div><a href="/">WORK</a><a href="/about">ABOUT</a></div></nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/project/:id" element={<Detail/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
</>}
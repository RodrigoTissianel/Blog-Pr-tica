//Routes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Post from 'pages/Post';
import Profile from 'pages/Profile';
import Search from 'pages/Search';

const Paths = ()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>

                <Route path='/Post:idPost' element={<Post/>}></Route>
                
                <Route path='/Profile' element={<Profile/>}></Route>
                <Route path='/Search' element={<Search/>}></Route>
            </Routes>
        </BrowserRouter>
        
        </>
    );
}

export default Paths;
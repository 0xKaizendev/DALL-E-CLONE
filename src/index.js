import Navbar from './components/Navbar.jsx'
import ImageCard from './components/ImageCard.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CreatePost from './pages/CreatePost.jsx'
import { styles,navlinks,frenchPrompts,englishPrompts } from './constants/index.js'
import {BiSearchAlt2,BiLoaderAlt} from 'react-icons/bi'
import {BsCardImage,BsDownload} from 'react-icons/bs'
import {Link,BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import banner from './assets/banner.jpg'
import {SiOpenai,} from 'react-icons/si'
import placeholder from './assets/placeholder.png'
import FormField from './components/FormField.jsx'

import Loader from './components/Loader.jsx'


export {Navbar,styles,Home,CreatePost,Footer,FormField,ImageCard,navlinks,Loader,BiSearchAlt2,BsCardImage,Link,Route,Router,Routes,banner,placeholder,BiLoaderAlt,frenchPrompts,SiOpenai,BsDownload,englishPrompts}
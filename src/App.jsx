import {Navbar,Home,CreatePost,Footer,Router,Link,Route,Routes} from './index.js'
function App() {

  return (
    <div className="w-full  bg-black text-white font-poppins h-full overflow-auto relative">
      <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element ={<Home/>}/>
              <Route path='/create' element ={<CreatePost/>}/>
            </Routes>      
      </Router>
      <Footer/>
    </div>   
  )
}

export default App

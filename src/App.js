import './App.css';
import Createblog from './components/Createblog';
import Items from './components/Items';
import Errorpage from './components/Errorpage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Single from './components/Single';
import Login from './components/Login';
// import img from './components/pattern.jpg'
import Signin from './components/Signin';
import { UserAuthContextProvider } from './context/UserAuthContext';
function App() {
  return (
    //style={{backgroundImage:`url(${img})`}}
     <div>
    <Router>
    <UserAuthContextProvider>
    <Navbar/>
     <Routes>
      <Route exact path='https://parasadhwaryu.github.io/BlogKnot/' element={<Items type={'home'}/>}></Route>
      <Route exact path='/blog' element={<Items type={'home'}/>}></Route>
      <Route exact path='Sports' element={<Items type={'sports'}/>}></Route>
      <Route exact path='Fitness' element={<Items type={'fitness'}/>}></Route>
      <Route exact path='Education' element={<Items type={'education'}/>}></Route>
      <Route exact path='Foodrecipies' element={<Items type={'food recipes'}/>}></Route>
      <Route exact path='Travel' element={<Items type={'travel'}/>}></Route>
      <Route exact path='createblog/*' element={<Createblog/>}/>
      <Route exact path='blog/createblog/*' element={<Createblog/>}/>
      <Route exact path='login' element={<Login/>}></Route>
      <Route exact path='signin' element={<Signin/>}></Route>
      <Route exact path='blog/*' element={<Single/>}></Route>
      <Route path='*' element={<Errorpage/>} ></Route>
     </Routes>
     </UserAuthContextProvider>
    </Router>
     </div>

  );
}

export default App;

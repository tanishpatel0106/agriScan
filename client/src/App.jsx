import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Analysis from "./Pages/Analysis/Analysis";
import ExpertAnalysis from "./Pages/ExpertAnalysis/ExpertAnalysis";
import SchemesInfo from './Pages/Schemes/SchemesInfo';
import SchemeInfoPage from './Pages/Schemes/SchemeInfoPage';
import SharedLayout from "./Components/Navbar/SharedLayout.jsx";
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';
import SignIn from './Components/SignInUp/SignIn';
import Register from './Components/SignInUp/Register';
import UserState from './Components/context/users/UserState';
import Authentication from './Components/SignInUp/Authentication';

function App() {

  return (
    <>
        <BrowserRouter>
          <UserState>
              <Routes>
                      <Route path={'/'} element={
                          <SharedLayout />
                      } >
                          <Route index element={ <Home/> } />
                          <Route path={'/dashboard/register'} element={ <Register/> } />
                          <Route path={'/about'} element={ <About/> } />
                          <Route path={'/analysis'} element={ <Analysis/> } />
                          <Route path={'/expert-analysis'} element={ <ExpertAnalysis/> }/>
                          <Route path={'/scheme-info'} element={ <SchemesInfo/> } />
                          <Route path={'/scheme-info/:id'} element={ <SchemeInfoPage/> } />
                          <Route path={'/dashboard/signin'} element={<SignIn/>}/>
                          <Route path={'/dashboard'} element={ <Dashboard/> } />
                          <Route path='/dashboard/authentication' element={<Authentication/>} />
                      </Route>
              </Routes>
          </UserState>
        </BrowserRouter>
    </>
  )
}

export default App

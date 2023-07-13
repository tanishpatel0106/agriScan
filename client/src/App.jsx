import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ChatBot from "./Pages/ChatBot.jsx";
import Register from "./Pages/Register.jsx";
import Analysis from "./Pages/Analysis.jsx";
import ExpertAnalysis from "./Pages/ExpertAnalysis.jsx";
import SchemesInfo from "./Pages/SchemesInfo.jsx";
import SharedLayout from "./Components/Navbar/SharedLayout.jsx";
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>

                <Route path={'/'} element={
                    <SharedLayout />
                } >
                    <Route index element={ <Home/> } />
                    <Route path={'/register'} element={ <Register/> } />
                    <Route path={'/chat-bot'} element={ <ChatBot/> } />
                    <Route path={'/analysis'} element={ <Analysis/> } />
                    <Route path={'/expert-analysis'} element={ <ExpertAnalysis/> }/>
                    <Route path={'/scheme-info'} element={ <SchemesInfo/> } />
                    <Route path={'/dashboard'} element={ <Dashboard/> } />
                </Route>


            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

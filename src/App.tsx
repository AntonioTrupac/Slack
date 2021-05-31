import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import { AppBody, AppLoading, AppLoadingContents } from "./AppBodyStyle";
import Spinner from "react-spinkit";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';

//components
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Chat } from "./components/chat/Chat";
import { Login } from "./components/user/Login";


function App() {
  const [user, loading ] = useAuthState(auth);

  if (loading) {
     return (
        <AppLoading>
           <AppLoadingContents>
               <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack"/>
               <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none"/>
           </AppLoadingContents>
        </AppLoading>
     )
  }

  return (
     <div className="App">
       <Router>
          {!user ? (
             <Login />
          ) : (
             <>
             <Header />
               <AppBody>
                <Sidebar />
                   <Switch>
                      <Route exact path="/">
                        <Chat />
                      </Route>
                   </Switch>
               </AppBody>
             </>
          )}

       </Router>
     </div>
  );
}

export default App;

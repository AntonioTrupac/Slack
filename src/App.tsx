import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import { AppBody } from "./AppBodyStyle";

//components
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import {Chat} from "./components/chat/Chat";

function App() {
  return (
     <div className="App">
       <Router>
         <Header />
         <AppBody>
           <Sidebar />
           <Switch>
             <Route exact path="/">
                <Chat />
             </Route>
           </Switch>
         </AppBody>
       </Router>
     </div>
  );
}

export default App;

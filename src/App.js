import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";
import "./styles/reset.css";
import "./styles/styles.css";


export default function App() {
    return(
        <BrowserRouter>
            <Header />
            
            
            <Switch>  

                <Route path="/" exact>
                    <MainPage />
                </Route>

                <Route path="/filme/:movieId" exact>
                    <Sessions />
                </Route>

                <Route path="/sessao/:sessionId" exact>
                    <Seats />
                </Route>

                <Route path="/sucesso" exact>
                    <Success />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}
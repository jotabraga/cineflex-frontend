import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";


export default function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Header />
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/sessoes/:sessionId" exact>
                    <Sessions />
                </Route>
                <Route path="/assentos/:seatsId" exact>
                    <Seats />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
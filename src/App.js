import {BrowserRouter, Switch, Route} from "reac-router-dom";
import Header from "./components/Header";

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Header />
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/sessoes/" exact>
                    <Sessions />
                </Route>
                <Route path="/assentos/" exact>
                    <Seats />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
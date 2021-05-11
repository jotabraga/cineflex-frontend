import {BrowserRouter, Switch, Route} from "reac-router-dom";

function App() {
    return(
        <BrowserRouter>
            <Switch>
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
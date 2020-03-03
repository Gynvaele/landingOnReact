import React, {PureComponent} from 'react';
import {Header, Shop} from "./components/importComponents";
import {BrowserRouter, Switch, Route} from "react-router-dom";


const MainPage = (props) => {
    return (
        <div className={"MainPage"}>
            {props.children}
        </div>
    )
};


class App extends PureComponent {


    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} render={(props) =>
                        <MainPage>
                            <Header {...props}/>
                            <Shop {...props}/>
                        </MainPage>
                    }/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

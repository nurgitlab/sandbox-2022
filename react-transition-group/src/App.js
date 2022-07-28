import {Transition} from "./components/Transition/Transition";
import {AnimatedList} from "./components/AnimatedList/AnimatedList";
import {CssTransition} from "./components/CssTransition/CssTransition";

import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import {BrowserRouter, NavLink, Route, Switch, useLocation, Routes} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";


function App() {
    const routes = [
        {
            path: '/',
            Component: Main
        },
        {
            path: '/about',
            Component: About
        }
    ]

    const location = useLocation();


    return (
        <div className="app">
            <div className={"navigate"}>
                <NavLink to={"/"}>MAIN</NavLink>
                <NavLink to={"/about"}>ABOUT</NavLink>
            </div>
            <Routes>
                {routes.map(({path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <TransitionGroup component={null}>
                                <CSSTransition key={location.key} classNames="page" timeout={1000}>
                                    <Component/>
                                </CSSTransition>
                            </TransitionGroup>
                        }
                    />
                ))}
            </Routes>

        </div>
    );
}

export default App;
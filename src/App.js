import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "./Components/Button";
import './Style/App.css';
import './Style/Button.css';
import * as actions from './Redux/Actions/index';

const App = () => {
    const active = useSelector(state => state.active);
    const toggle = useDispatch();

    useEffect(() => {
            toggle(actions.connect());
        }
        , [toggle]);

    useEffect(() => {
        if (active === 'true') {
            document.body.classList.add('Green')
        } else {
            document.body.classList.remove('Green')
        }
    }, [active])

    return (
        <div className="Container">
            <Button handleClick={() => toggle(actions.toggle())} active={active}/>
        </div>
    );
}

export default App;

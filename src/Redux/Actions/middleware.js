import {CLOSE, CONNECT, ERROR, MESSAGE, TOGGLE} from './constants';

const ws = new WebSocket('ws://localhost:3030');

const middleware = store => next => action => {
    switch (action.type) {
        case CONNECT:
            ws.onopen = () => store.dispatch({type: 'OPEN'});
            ws.onclose = (event) => store.dispatch({type: CLOSE, payload: event});
            ws.onmessage = (event) => {
                let sent_data = event;
                if (typeof JSON.parse(event.data).toggled_state.toggled_state === "undefined") {
                    sent_data = {'toggled_state': JSON.parse(event.data).toggled_state}
                    console.log('edited_data', sent_data)
                } else {
                    sent_data = JSON.parse(event.data).toggled_state;
                }
                console.log('sent_data', sent_data)
                store.dispatch({type: MESSAGE, payload: sent_data});
            };
            ws.onerror = (event) => {
                console.log(event);
                store.dispatch({type: ERROR})
            };
            break;

        case TOGGLE:
            ws.send(JSON.stringify(action));
            break;

        case CLOSE:
            ws.close();
            break;
        default:
            break;
    }
    return next(action);
}

export default middleware;
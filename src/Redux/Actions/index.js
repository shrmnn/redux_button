import {CONNECT, TOGGLE} from "./constants";

export const toggle = () => {
    return {
        type: TOGGLE
    }
}

export const connect = () => {
    return {
        type: CONNECT
    }
}


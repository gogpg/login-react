import { aaddNewClient_const } from "../constants/dataConstants";
import localStorageAdd from "../functions/localStorage";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {
        case aaddNewClient_const:
            newState = [...newState, action.payload];
            localStorageAdd(newState);
            break;

        default:
    }


    return newState;
}

export default data_reducer;
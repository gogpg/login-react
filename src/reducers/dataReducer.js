import { registration_const } from "../constants/dataConstants";
import getId from "../functions/getId";
import updateDataInLocalStorage from "../functions/localStorage";

function data_reducer(_, action) {

    let newState = [{}, []];
    let data = JSON.parse(localStorage.getItem('usersData')) || [];  //vienas userData, kitas notifications skirtas masyvas
    switch (action.type) {
        case registration_const:
            if (data) {
                if (!data.some(user => user.email === action.payload.email)) {
                    newState[0] = { ...action.payload, id: getId(), registrationDate: Date.now() };
                    data = [...data, newState[0]];
                    updateDataInLocalStorage(data);
                } else {
                    newState[1] = ['User already exist.']
                }
            }

            break;

        default:
    }


    return newState;
}

export default data_reducer;
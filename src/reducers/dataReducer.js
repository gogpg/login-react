import { registration_const } from "../constants/dataConstants";
import getId from "../functions/getId";
import updateDataInLocalStorage from "../functions/localStorage";

function data_reducer(_, action) {

    let newState = [JSON.parse(localStorage.getItem('usersData')) || [], []];  //vienas userData, kitas notifications skirtas masyvas

    switch (action.type) {
        case registration_const:
            if (newState[0]) {
                if (!newState[0].some(user => user.email === action.payload.email)) {
                    newState[0] = [...newState[0], { ...action.payload, id: getId() }];
                    updateDataInLocalStorage(newState[0]); //paduodame pirmaji masyva
                }
            }

            break;

        default:
    }


    return newState;
}

export default data_reducer;
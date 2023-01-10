import { aaddNewClient_const } from "../constants/dataConstants";

export function addNewClient_action(newData) {
    return {
        type: aaddNewClient_const,
        payload: newData
    }
}
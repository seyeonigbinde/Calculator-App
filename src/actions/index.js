export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ACTION_MPLUS = "MEMORY_ACTION_MPLUS";
export const MEMORY_ACTION_APPLY = "MEMORY_ACTION_APPLY";
export const MEMORY_ACTION_MC = "MEMORY_ACTION_MC";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}
export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY});
}
export const addToMemoryPlus = () => {
    return({type: MEMORY_ACTION_MPLUS});
}
export const addToMemoryApply = () => {
    return({type: MEMORY_ACTION_APPLY});
}
export const addToMemoryMC = () => {
    return({type: MEMORY_ACTION_MC});
}
import {INCREMENT_COUNT, DECREMENT_COUNT} from "./actionsType";


export const incremenet = () => ({
    type: INCREMENT_COUNT
})

export const decrement = () => ({
    type: DECREMENT_COUNT
})
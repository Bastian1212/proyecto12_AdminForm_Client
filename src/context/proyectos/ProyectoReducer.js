import {FORMULARIO_PROYECTO,OBTENER_PROYECTO} from "../../types/index";

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true 
            }
        case OBTENER_PROYECTO:
            return {
                ...state, 
                proyectos: action.payload
            }
        default:
            return state;
    }
}
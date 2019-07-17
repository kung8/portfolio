const initialState = {selectedProject:{}}

const SELECTED_PROJECT = 'SELECTED_PROJECT'

export function selectProject(project){
    return{
        type:SELECTED_PROJECT,
        payload:project
    }
}

export default function(state = initialState, action){
    const {type,payload} = action
    switch(type){
        case SELECTED_PROJECT:
            return {...state,selectedProject:payload}
        default:
            return state
    }
}

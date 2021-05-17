import {ActionType} from '../action-types';
import {Action} from '../actions';


interface RespositoriesState{
    loading:boolean;
    error: string | null;
    data: string[];
}

const reducer = (state : RespositoriesState, action : Action):RespositoriesState =>{

    switch (action.type) {
        case ActionType.SEACH_REPOSITORIES:
            return {loading:true, error:null, data:[]};            
        case ActionType.SEACH_REPOSITORIES_SUCCESS:            
            return {loading:false, error:null, data:action.payload};
        case ActionType.SEACH_REPOSITORIES_ERROR:            
            return {loading:false, error:action.payload, data:[]};    
        default:
            return state;
    }

}

export default reducer;

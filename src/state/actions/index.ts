import {ActionType} from '../action-types';


interface SearchRepositoriesAction{
    type: ActionType.SEACH_REPOSITORIES;
    payload?:any;
}

interface SearchRepositoriesSuccessAction{
    type: ActionType.SEACH_REPOSITORIES_SUCCESS;
    payload:string[];
}

interface SearchRepositoriesErrorAction{
    type: ActionType.SEACH_REPOSITORIES_ERROR;
    payload:string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
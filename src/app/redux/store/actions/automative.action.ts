import { createAction, props } from "@ngrx/store";
import { Cars } from "src/utils/types/types";

const onLoadAutomotives = '[CarList Component] on load Automotives';
const onLoadAutomotivesSuccess = '[CarList Component] on load Automotives Success';
const onLoadAutomotivesFailure = '[CarList Component] on load Automotives Failure';


const onLoadAutomotivesAction = createAction(onLoadAutomotives);
const onLoadAutomotivesSuccessAction = createAction(onLoadAutomotivesSuccess, props<{ payload: Cars; }>());
const onLoadAutomotivesFailureAction = createAction(onLoadAutomotivesFailure, props<{ message: string; }>());


export {
    onLoadAutomotives, onLoadAutomotivesAction, onLoadAutomotivesFailure, onLoadAutomotivesFailureAction, onLoadAutomotivesSuccess, onLoadAutomotivesSuccessAction
};

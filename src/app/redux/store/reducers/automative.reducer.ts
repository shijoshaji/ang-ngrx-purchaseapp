import { createReducer, on } from '@ngrx/store';
import { Cars } from 'src/utils/types/types';
import { onLoadAutomotivesAction, onLoadAutomotivesSuccessAction } from '../actions';





export type InitialCars = {
    cars: Cars;
};

export const initialState: InitialCars = {
    cars: []
};

export const automotiveReducer = createReducer(
    initialState,
    on(onLoadAutomotivesAction, state => ({ ...state })),
    on(onLoadAutomotivesSuccessAction, (state, { payload }) => ({ ...state, cars: [...state.cars, ...payload] }))
);


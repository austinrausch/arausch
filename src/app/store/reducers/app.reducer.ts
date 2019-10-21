import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { mobileReducers } from './mobile.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
    mobileState: mobileReducers
}
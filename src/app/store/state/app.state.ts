import { MetaReducer } from '@ngrx/store';
import { IMobileState, initialMobileState } from './IMobileState';
import { environment } from 'src/environments/environment';

export interface AppState {
    readonly mobileState: IMobileState;
}

export const initialAppState: AppState = {
    mobileState: initialMobileState
}

export function getInitialAppState(): AppState {
    return initialAppState;
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
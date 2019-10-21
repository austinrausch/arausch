import { AppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { IMobileState } from '../state/IMobileState';

const mobileState = (state: AppState) => state.mobileState;

export const selectIsMobileWidth = createSelector(
    mobileState,
    (state: IMobileState) => state.isMobileWidth
);

export const selectIsMobileDevice = createSelector(
    mobileState,
    (state: IMobileState) => state.isMobileDevice
);

export const selectDeviceWidth = createSelector(
    mobileState,
    (state: IMobileState) => state.deviceWidth
);

export const selectMobileDevice = createSelector(
    mobileState,
    (state: IMobileState) => state.mobileDevice
);
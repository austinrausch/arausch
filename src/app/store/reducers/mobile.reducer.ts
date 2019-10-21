import { initialMobileState, IMobileState } from '../state/IMobileState';
import { EMobileActionTypes, MobileActions } from '../actions/mobile.actions';

export function mobileReducers(
    state = initialMobileState,
    action: MobileActions
): IMobileState {
    switch (action.type) {
        case EMobileActionTypes.SetIsMobileWidth: {
            return {
                ...state,
                isMobileWidth: action.payload
            };
        }

        case EMobileActionTypes.SetIsMobileDevice: {
            return {
                ...state,
                isMobileDevice: action.payload
            };
        }

        case EMobileActionTypes.SetDeviceWidth: {
            return {
                ...state,
                deviceWidth: action.payload
            };
        }

        case EMobileActionTypes.SetMobileDevice: {
            return {
                ...state,
                mobileDevice: action.payload
            };
        }

        default:
            return state;
    }
}
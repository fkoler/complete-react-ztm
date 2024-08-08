import { Middleware } from 'redux';
import { RootState } from '../store';

export const loggerMiddleware: Middleware<{}, RootState> =
    (store) => (next) => (action) => {
        if (typeof action === 'object' && action !== null && 'type' in action) {
            console.log('type: ', action.type);
            console.log('payload: ', (action as any).payload);
            console.log('currentState: ', store.getState());
        }

        next(action);

        if (typeof action === 'object' && action !== null && 'type' in action) {
            console.log('next state: ', store.getState());
        }
    };

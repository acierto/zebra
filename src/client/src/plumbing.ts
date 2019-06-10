import {configureStore, runSaga} from './store/configure-store';
import {registerRequestInterceptors, registerResponseInterceptors} from './http/http-service';
import {errorInterceptor} from './interceptors/error-interceptor';
import {resetSessionExpiration} from './interceptors/request-interceptor';
import historyService from './history';

export const store = configureStore(historyService.history);

registerResponseInterceptors(Promise.resolve, errorInterceptor(store, historyService));
registerRequestInterceptors(resetSessionExpiration(store));
runSaga();

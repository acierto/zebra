import {configureStore} from './store/configure-store';
import historyService from './history';

export const store = configureStore(historyService.history);

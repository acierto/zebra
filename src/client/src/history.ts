import {createHashHistory as createHistory} from 'history';

const history = createHistory();

const pushPathname = (location) => {
    const {pathname, search} = history.location;
    if (location !== `${pathname}${search}`) {
        history.push(location);
    }
};

export default {
    history,
    pushPathname
};

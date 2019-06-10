const SHOW = 'appSpinner/SHOW';
const HIDE = 'appSpinner/HIDE';

export default {
    HIDE,
    hide: () => ({type: HIDE}),
    SHOW,
    show: () => ({type: SHOW})
};

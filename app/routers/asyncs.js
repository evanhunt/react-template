import Loadable from 'react-loadable';

import Loading from 'components/Loading';

export const LoadableWelcome = Loadable({
    loader: () => import('containers/Welcome'),
    loading: Loading,
});

export const LoadableComponentLifecycleFunction = Loadable({
    loader: () => import('containers/ComponentLifecycle/Function'),
    loading: Loading,
});

export const LoadableComponentLifecycleStep = Loadable({
    loader: () => import('containers/ComponentLifecycle/Step'),
    loading: Loading,
});

export const LoadableSetState = Loadable({
    loader: () => import('containers/SetState'),
    loading: Loading,
});

export const LoadableTopLevelApi = Loadable({
    loader: () => import('containers/TopLevelApi'),
    loading: Loading,
});

export const LoadableRedux = Loadable({
    loader: () => import('containers/Redux'),
    loading: Loading,
});
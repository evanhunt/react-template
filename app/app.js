/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 利用Provider可以使我们的 store 能为下面的组件所用
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
// import { useScroll } from 'react-router-scroll';

import finalCreateStore from './reduxs';
import reducer from './reduxs/reducers';
import routes from './routes';

import DevTools from './containers/DevTools';  // 引入Redux调试工具DevTools
// localstorage
import localStoragePolyfill from './utils/localStoragePolyfill';

/* eslint-disable */
import '!file-loader?name=[name].[ext]!./favicon.ico';
/* eslint-enable */
import './assets/css/rewrite.css';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// 实现localstorage
localStoragePolyfill.polyfill();

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
    document.body.classList.add('fontLoaded');
}, () => {
    document.body.classList.remove('fontLoaded');
});

const store = finalCreateStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <Router history={history}>
                    { routes }
                </Router>
                <DevTools />
            </div>
        </Provider>,
        document.getElementById('app')
    );
};
render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

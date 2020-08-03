import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import { createRootReducer } from './';
import rootSaga from './sagas';

const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(createRootReducer(), bindMiddleware([sagaMiddleware]));

    sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

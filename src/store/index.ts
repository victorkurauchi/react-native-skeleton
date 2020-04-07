import {
  createStore, applyMiddleware, compose,
 } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// reducers
import { rootReducer } from './reducers';

// epics
import { rootEpic } from './epics';

import GithubClient from '@/client/GithubClient';
import NestDefaultClient from '@/client/NestDefaultClient';
import StrapiClient from '@/client/StrapiClient';
 
// history
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    github: new GithubClient(),
    backend: new NestDefaultClient(),
    strapi: new StrapiClient(),
  },
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      epicMiddleware,
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
 
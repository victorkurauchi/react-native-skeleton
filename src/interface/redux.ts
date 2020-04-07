import { Action } from 'redux';
import GithubClient from '@/client/GithubClient';
import StrapiClient from '@/client/StrapiClient';

export interface ReduxAction<T> extends Action<string> {
  type: string;
  payload: T;
}

export interface Dependencies {
  github: GithubClient;
  strapi: StrapiClient;
}

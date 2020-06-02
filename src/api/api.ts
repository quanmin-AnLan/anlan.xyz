import {get, post} from './http';

export const questionList = (params: object) => get('/api/combat', params);

export const ranking = (params: object = {}) => get('/challenge/api/ranking', params);

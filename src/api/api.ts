import {get, post} from './http';

export const questionList = (params: any) => get('/api/combat', params);

import {adGet, anlanGet, yyxGet} from './http';

export const questionList = (params: object) => adGet('/api/combat', params);

export const ranking = (params: object = {}) => adGet('/challenge/api/ranking', params);

export const struggle = (params: object = {}) => adGet('/challenge/api/struggle', params);

export const yyxQuestion = (params: object) => yyxGet('/topicList', params);

export const useRanking = (params: object = {}) => yyxGet('/useranking', params);

export const reportPV = (params: object) => anlanGet('/reportPV', params);

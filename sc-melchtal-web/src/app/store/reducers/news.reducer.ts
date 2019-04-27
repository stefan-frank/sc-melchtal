import {News} from '../../models/news.model';
import * as NewsActions from '../actions/news.action';
import {NewsActionTypes} from '../actions/news.action';

export interface State {
  news: News[];
  dataLoadedFromApi: boolean;
}

export const initialState: State = {
  news: new Array<News>(),
  dataLoadedFromApi: false
};

export const getNews = (state: State) => state.news;
export const getDataLoadedFromApi = (state: State) => state.dataLoadedFromApi;

export function reducer(state = initialState, action: NewsActions.NewsActions): State {
  switch (action.type) {
    case NewsActionTypes.LoadNews:
      return handleLoadNews(state, action);
    case NewsActionTypes.LoadNewsFromApi:
      return handleLoadNewsFromApi(state, action);
    case NewsActionTypes.LoadNewsCompleted:
      return handleLoadNewsCompleted(state, action);
    default:
      return state;
  }
}

function handleLoadNews(state: State, action: NewsActions.LoadNews): State {
  return  {
    ...state
  };
}

function handleLoadNewsFromApi(state: State, action: NewsActions.LoadNewsFromApi): State {
  return {
    ...state
  };
}

function handleLoadNewsCompleted(state: State, action: NewsActions.LoadNewsCompleted): State {
  return {
    ...state,
    news: action.payload,
    dataLoadedFromApi: true
  };
}

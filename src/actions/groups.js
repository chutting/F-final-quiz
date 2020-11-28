import http from '../utils/http';

export const getAllGroups = () => {
  return http.get('/groups');
};

export const autoGrouping = () => {
  return http.post('/groups/auto-grouping');
};

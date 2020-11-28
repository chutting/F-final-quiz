import http from '../utils/http';

export const getAllUnGroupedTrainers = () => {
  return http.get('/trainers?grouped=false');
};

export const createTrainer = (newTrainer) => {
  return http.post('/trainers', newTrainer);
};

export const deleteTrainer = (id) => {
  http.delete(`trainers/${id}`);
};

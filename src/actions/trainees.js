import http from '../utils/http';

export const getAllUnGroupedTrainees = () => {
  return http.get('/trainees?grouped=false');
};

export const createTrainee = (newTrainee) => {
  return http.post('/trainees', newTrainee);
};

export const deleteTrainer = (id) => {
  http.delete(`trainees/${id}`);
};

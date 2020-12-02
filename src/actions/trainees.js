import http from '../utils/http';

export const getAllUnGroupedTrainees = () => {
  return http.get('/trainees?grouped=false');
};
// TODO GTB-工程实践: - 未使用的代码我们叫做dead code，应该被删除。下同。
export const createTrainee = (newTrainee) => {
  return http.post('/trainees', newTrainee);
};

export const deleteTrainer = (id) => {
  http.delete(`trainees/${id}`);
};

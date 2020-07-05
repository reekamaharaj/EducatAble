import axios from 'axios';

export default {
  // Gets the question with the given id
  getQuestion: function (id) {
    return axios.get('/api/question/' + id);
  },
  // Deletes the question with the given id
  deleteQuestion: function (id) {
    return axios.delete('/api/question/' + id);
  },
  // Saves a question to the database
  saveQuestion: function (questionData) {
    return axios.post('/api/question', questionData);
  },
  savedQuestion: function() {
    return axios.get('/api/question').then(result => result.data)
  }
};

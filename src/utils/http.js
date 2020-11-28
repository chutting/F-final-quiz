import DEFAULT_URL from '../constant';

const mode = 'cors';

const http = {
  get: (path) => {
    return fetch(`${DEFAULT_URL}${path}`, {
      method: 'GET',
      mode,
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('请求错误');
    });
  },

  post: (path, requestObject = null) => {
    return fetch(`${DEFAULT_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestObject),
      method: 'POST',
      mode,
    }).then((response) => {
      if (response.status === 201) {
        window.location.reload();
      }
    });
  },

  delete: (path) => {
    fetch(`${DEFAULT_URL}${path}`, {
      method: 'DELETE',
      mode,
    }).then((response) => {
      if (response.status === 204) {
        window.location.reload();
      }
    });
  },
};

export default http;

// TODO GTB-知识点: - 针对这个文件：这个http.js应该被移入到/actions文件下，因为它只跟HTTP请求相关。我们应该尽量地把文件根据业务亲密度内聚。
import DEFAULT_URL from '../constant';
// TODO GTB-知识点: - 跨域的处理应该放在后端
const mode = 'cors';
// TODO GTB-知识点: + 进行了抽象，很好
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
        // TODO GTB-完成度: - post请求也应该返回response,不应该reload页面
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
        // TODO GTB-完成度: - delete请求也应该返回response,不应该reload页面
        window.location.reload();
      }
    });
  },
};

export default http;

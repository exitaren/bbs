import axios from 'axios';

const jp_url = {
  baseUrl: 'https://jsonplaceholder.typicode.com/'
};

function getPostUrl() {
  return axios.get(`${jp_url.baseUrl}posts/1/comments`);
}

export { getPostUrl };

import axios from 'axios';

const jp_url = {
  baseUrl: 'https://jsonplaceholder.typicode.com/'
};

function getPostUrl(pageNum) {
  return axios.get(`${jp_url.baseUrl}posts/${pageNum}/comments`);
}

export { getPostUrl };

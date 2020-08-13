import axios from 'axios';
import firebaseConfig from '@/firebase/firebase.config';

const jp_url = {
  baseUrl: 'https://jsonplaceholder.typicode.com/'
};

function getPostUrl(pageNum) {
  return axios.get(`${jp_url.baseUrl}posts/${pageNum}/comments`);
}

function getOpenUrl() {
  return axios.get(`${firebaseConfig.databaseURL}/test.json`);
}

function postOpenUrl(postData) {
  return axios.post(`${firebaseConfig.databaseURL}/test`, postData);
}

console.log('databaseURL', firebaseConfig.databaseURL);

export { getPostUrl, getOpenUrl, postOpenUrl };

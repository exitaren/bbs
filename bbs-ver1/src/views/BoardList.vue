<template>
  <div class="contatiner__box">
    <v-simple-table class="contatiner__box--table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="table__number text-center">Number</th>
            <th class="table__title text-left">Title</th>
            <th class="table__author text-left">author</th>
            <th
              v-if="$route.name === 'crudboard'"
              class="table__time text-left"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, idx) in posts" :key="post.name">
            <td class="table__number text-center">{{ idx + 1 }}</td>
            <td class="table__title text-left">
              <router-link :to="`/bbs/${post.id}`">{{ post.name }}</router-link>
            </td>
            <td class="table__author">{{ post.email }}</td>
            <td v-if="$route.name === 'crudboard'" class="table__time">
              yyyy.mm.dd hh.mm.ss
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BoardList',
  data() {
    return {
      posts: ''
    };
  },
  created() {
    let vm = this;
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => {
        console.log(this.$route.path);
        vm.posts = response.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
.contatiner__box {
  width: 100%;
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
}
.table__number {
  width: 60px;
}
.table__title {
}
.table__author {
  width: 200px;
}
.table__time {
  width: 200px;
}
</style>

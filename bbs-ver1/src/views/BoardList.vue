<template>
  <div class="contatiner__box">
    <v-simple-table class="contatiner__box--table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="table__number text-center">Number</th>
            <th class="table__title text-left">Title</th>
            <th class="table__author text-left">Author</th>
            <th
              v-if="$route.name === 'openboard'"
              class="table__time text-left"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody v-if="$route.name === 'jsonboard'">
          <tr v-for="post in posts" :key="post.id">
            <td class="table__number text-center">{{ post.id }}</td>
            <td class="table__title text-left">
              <router-link :to="`/bbs/${post.id}`">{{ post.name }}</router-link>
            </td>
            <td class="table__author">{{ post.email }}</td>
          </tr>
        </tbody>
        <tbody v-if="$route.name === 'openboard'">
          <tr v-for="item in openItems" :key="item">
            <td class="table__number text-center">{{ item }}</td>
            <td class="table__title text-left">
              <router-link :to="`/bbs/${item}`">{{ item }}</router-link>
            </td>
            <td class="table__author">{{ item }}</td>
            <td class="table__time">
              yyyy.mm.dd hh.mm.ss
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn @click="toWrite" color="primary">글쓰기</v-btn>
    <Pagination
      :pageNum="pageNum"
      :pageSize="pageSize"
      :buttonSize="buttonSize"
      @pageMove="changePageNum"
    ></Pagination>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Pagination from '@/components/Pagination';

export default {
  name: 'BoardList',
  components: {
    Pagination
  },
  data() {
    return {
      listLength: 5,
      pageSize: 10,
      buttonSize: 5
    };
  },
  async mounted() {
    this.$store.dispatch('FETCH_POST');
    this.$store.dispatch('FETCH_OPEN_ITEM');
  },
  methods: {
    ...mapActions(['changePage']),
    changePageNum(pageNum) {
      this.changePage(pageNum);
      console.log(pageNum);
    },
    toWrite() {
      this.$router.push('/write');
    }
  },
  computed: {
    ...mapState(['posts', 'pageNum', 'openItems'])
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

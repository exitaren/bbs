<template>
  <div class="contatiner__box">
    <v-card class="mx-auto">
      <v-img src="https://source.unsplash.com/random" height="200px"></v-img>
      <v-card-title>
        <v-text-field
          autofocus="true"
          placeholder="제목"
          v-model="inputTitle"
        />
      </v-card-title>
      <v-card-subtitle />
      <v-divider></v-divider>
      <v-card-text>
        <v-textarea
          name="input-7-1"
          placeholder="아무 말이나 일단 적어. 뭐가 문제야 쎄이썸띵"
          v-model="inputText"
          no-resize
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="postWrite">글쓰기</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'PostWrite',
  data() {
    return {
      inputTitle: '',
      inputText: ''
    };
  },
  methods: {
    ...mapActions['WRITE_OPEN_ITEM'],
    postWrite() {
      this.$store.dispatch('WRITE_OPEN_ITEM', this.inputText);
    }
  }
};
</script>

<style></style>

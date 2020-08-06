<template>
  <div class="pagenation--warp">
    <v-btn
      color="#1E1E1E"
      small
      min-width="16"
      @click="movePage(1)"
      class="pagination--arrow"
      :disabled="isFirst"
      ><<
    </v-btn>
    <v-btn
      color="#1E1E1E"
      small
      min-width="16"
      @click="movePage(pageNum - 1)"
      class="pagination--arrow"
      :disabled="isFirst"
      ><
    </v-btn>
    <ul class="pagenation--btn__list">
      <li
        class="pagenation--btn__each"
        v-for="(list, idx) in pageLength"
        :key="idx"
        @click="movePage(idx + 1)"
      >
        <v-btn
          text
          small
          :class="['pagenation--btn', idx + 1 === pageNum ? 'activeted' : '']"
          min-width="16"
          >{{ idx + 1 }}</v-btn
        >
      </li>
    </ul>
    <v-btn
      color="#1E1E1E"
      small
      min-width="16"
      @click="movePage(pageNum + 1)"
      class="pagination--arrow"
      :disabled="isLast"
    >
      >
    </v-btn>
    <v-btn
      color="#1E1E1E"
      small
      min-width="16"
      class="pagination--arrow"
      @click="movePage(pageSize)"
      :disabled="isLast"
    >
      >>
    </v-btn>
    <!-- <button @click="showList">snwlffj</button> -->
  </div>
</template>

<script>
import { arrowRightBoldCircle } from '@mdi/js';

export default {
  name: 'Pagination',
  props: {
    pageNum: {
      type: Number,
      required: true,
      default: 0
    },
    pageSize: {
      type: Number,
      required: true,
      default: 0
    },
    buttonSize: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    pageLength() {
      return this.pageSize;
    },
    isLast() {
      if (this.pageNum === this.pageSize) {
        return 'disabled';
      }
    },
    isFirst() {
      if (this.pageNum === 1) {
        return 'disabled';
      }
    }
  },
  methods: {
    movePage(pageBtnAction) {
      this.$emit('pageMove', pageBtnAction);
    }
    // 반복문으로 pageSize의 길이를 다 담는 array x를 만든다.
    // x를 buttonSize 길이로 나눈 배열 y를 만든다.
    // y의 1번째 인덱스만큼 반복시키는 배열을 리턴하여 화면에 뿌린다.
    // pageNum이 y의 n번째 lengtn 번째 인덱스보다 커졌을 때, y의 n + 1번째 배열을 리턴하여 화면에 뿌린다.

    // showList() {
    //   let arr = [];
    //   for (let i = 0; i < this.buttonSize; i++) {
    //     arr.push(i + 1);
    //   }
    //   // const map1 = arr.slice(0, this.buttonSize);
    //   if (arr[arr.length - 1] > this.pageNum) {
    //     arr = arr.map(x => x + this.buttonSize);
    //   }
    //   console.log(arr);
    // }

    // showList(stateNum) {
    //   if (stateNum > this.buttonSize) return stateNum + this.buttonSize;
    //   return stateNum;
    // }
  }
};
</script>

<style>
.pagenation--warp {
  text-align: center;
  margin-top: 28px;
}
.pagenation--warp .pagenation--btn__list {
  display: inline-block;
  padding: 0 8px;
}
.pagenation--btn__each {
  display: inline-block;
}
.pagenation--btn.theme--dark {
  color: rgba(255, 255, 255, 0.5);
}
.pagenation--btn.activeted.theme--dark {
  color: rgba(255, 255, 255, 1);
}
.pagination--arrow + .pagination--arrow {
  margin-left: 8px;
}
</style>

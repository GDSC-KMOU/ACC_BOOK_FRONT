<template v-if="loginCheck">
  <li v-if="loginCheck"><a href="/login">로그인</a></li>
  <li v-if="loginCheck"><a href="/register">회원가입</a></li>
  <li v-if="!loginCheck"><a href="/logout">로그아웃</a></li>
  <li v-if="!loginCheck"><a href="/write">작성</a></li>
</template>

<script>
  "use strict";

  import requestURL from '@/utils/requestURL.js';
  import { ref } from 'vue';

  export default {
    name: 'LoginButton',
    setup() {
      const loginCheck = ref(true);

      fetch(requestURL() + '/login/state').then(function(res) {
        return res.json();
      }).then(function(data) {
        console.log(data);
        if(data && data.data.result) {
          loginCheck.value = false;
        }
      });

      return {
        loginCheck
      };
    }
  }
</script>
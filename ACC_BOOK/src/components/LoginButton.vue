<template>
  <span v-if="loginCheck">
    <li><a href="/login">로그인</a></li>
    <li><a href="/register">회원가입</a></li>
  </span>
  <span v-else>
    <li><a href="/logout">로그아웃</a></li>
    <li><a href="/write">작성</a></li>
  </span>
</template>

<script>
  import requestURL from '@/utils/requestURL.js';

  export default {
    name: 'LoginButton',
    data() {
      return {
        loginCheck : false
      }
    },
    setup() {
      fetch(requestURL() + '/login/state').then(function(res) {
        return res.json();
      }).then(function(data) {
        if(data && data.success === "yes") {
          if(data.data === "") {
            this.loginCheck = true;
          }
        }
      });
    }
  }
</script>
<template>
  <input id="id_field" type="text" placeholder="아이디" />
  <br />
  <input id="password_field" type="password" placeholder="비밀번호" />
  <br />
  <button @click="send_request()">로그인</button>
</template>

<script>
  "use strict";
  
  import requestURL from '@/utils/requestURL.js';

  export default {
    name: 'Login',
    methods : {
      send_request() {
        let id = document.getElementById('id_field').value;
        let password = document.getElementById('password_field').value;

        fetch(requestURL() + "/login", {
          method: "POST",
          body: JSON.stringify({
            userId: id,
            password: password,
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          credentials: 'include'
        }).then(function(res) {
          return res.json();
        }).then(function(data) {
          if(data) {
            window.location.pathname = '/';
          }
        });
      }
    }
  }
</script>
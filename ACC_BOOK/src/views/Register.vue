<template>
  <input id="id_field" type="text" placeholder="아이디" />
  <br />
  <input id="user_name_field" type="text" placeholder="이름" />
  <br />
  <input id="password_field" type="password" placeholder="비밀번호" />
  <br />
  <input id="password_check_field" type="password" placeholder="비밀번호 확인" />
  <br />
  <button @click="send_request()">회원가입</button>
</template>

<script>
  "use strict";

  import requestURL from '@/utils/requestURL.js';

  export default {
    name: 'Register',
    methods : {
      send_request() {
        let id = document.getElementById('id_field').value;
        let user_name = document.getElementById('user_name_field').value;
        let password = document.getElementById('password_field').value;
        let password_check = document.getElementById('password_check_field').value;
        
        if(password_check !== password) {
          alert("비밀번호와 비밀번호 확인이 틀립니다.");
        } else {
          fetch(requestURL() + "/register", {
            method: "POST",
            body: JSON.stringify({
              userId: id,
              name: user_name,
              password: password,
            }),
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          }).then(function(res) {
            return res.json();
          }).then(function(data) {
            console.log(data);
          });
        }
      }
    }
  }
</script>
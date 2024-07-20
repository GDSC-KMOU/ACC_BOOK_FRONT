<template>
  <select id="select_field">
    <option value="+">수입</option>
    <option value="-">지출</option>
  </select>
  <br>
  <input id="amount_field" type="number" placeholder="금액">
  <br>
  <input id="reason_field" type="text" placeholder="사용 내역">
  <br>
  <button @click="send_request()">전송</button>
</template>

<script>
  "use strict";

  import requestURL from '@/utils/requestURL.js';
  import stringToNumber from '@/utils/stringToNumber.js';
  
  export default {
    name: 'Write',
    methods : {
      send_request() {
        let select = document.getElementById('select_field').value;
        let amount = document.getElementById('amount_field').value;
        let reason = document.getElementById('reason_field').value;

        let amount_int = stringToNumber(amount);

        fetch(requestURL() + "/detail/today", {
          method: "POST",
          body: JSON.stringify({
            type: select,
            detail: reason,
            amount: amount_int,
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          credentials: 'include'
        }).then(function(res) {
          return res.json();
        }).then(function(data) {
          console.log(data);
        });
      }
    }
  }
</script>
<template>
  <input style="display: none;" id="date_field" type="date" @change="fetchData()" />
  <ul>
    <li>오늘의 날짜 : <TodayDate /></li>
    <li style="margin-top: 0.5em;">접속한 사용자명 : {{ user_name }}</li>
    <li>현재 잔액 : {{ balance }}</li>
    <li style="margin-top: 0.5em;">오늘의 지출 : {{ out_money }}</li>
    <li>오늘의 수입 : {{ in_money }}</li>
  </ul>
  <table>
    <thead>
      <tr>
        <th>순번</th>
        <th>사용자명</th>
        <th>날짜</th>
        <th>시간</th>
        <th>유형</th>
        <th>금액</th>
        <th>세부내용</th>
        <th>옵션</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in displayedItems" :key="item.index">
        <td>{{ item.index }}</td>
        <td>{{ item.userId }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.detail }}</td>
        <td><a :href="'/edit/' + item.index">수정</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  "use strict";

  import TodayDate from '@/components/TodayDate.vue';

  import requestURL from '@/utils/requestURL.js';
  import dateGet from '@/utils/date.js';

  import { ref } from 'vue';

  export default {
    name: 'AccountToday',
    computed: {
      displayedItems() {
        return this.items;
      }
    },
    setup() {
      const items = ref([]);
      const balance = ref(0);
      const out_money = ref(0);
      const in_money = ref(0);
      const user_name = ref('');

      const fetchData = function(firstDo = 0) {
        let url = document.getElementById('date_field').value;
        if(firstDo === 1) {
          url = dateGet();
        }
        console.log(url);

        fetch(requestURL() + "/detail/today", {
          credentials: 'include'
        }).then(function(res) {
          return res.json();
        }).then(function(data) {
          console.log(data);
          if(data) {
            items.value = data.data.detailListToday;
            balance.value = data.data.balance;
            user_name.value = data.data.name;

            for(let for_a = 0; for_a < data.data.detailListToday.length; for_a++) {
              if(data.data.detailListToday[for_a].type === '-') {
                out_money.value += data.data.detailListToday[for_a].amount;
              } else {
                in_money.value += data.data.detailListToday[for_a].amount;
              }
            }
          }
        }).catch(function(e) {
          console.log('서버 응답 없음');
        });
      }

      return {
        items,
        fetchData,
        balance,
        out_money,
        in_money,
        user_name
      };
    },
    mounted() { 
      this.fetchData(1);
    },
    components: {
      TodayDate,
    }
  };
</script>
<template>
  <input id="date_field" type="month" @change="fetchData()" />
  <br />
  <ul>
    <li>이 달의 지출 : {{ out_money }}</li>
    <li>이 달의 수입 : {{ in_money }}</li>
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

  import requestURL from '@/utils/requestURL.js';
  import dateGet from '@/utils/date.js';

  import { ref } from 'vue';

  export default {
    name: 'AccountMonth',
    computed: {
      displayedItems() {
        return this.items;
      }
    },
    setup() {
      const items = ref([]);
      const out_money = ref(0);
      const in_money = ref(0);

      const fetchData = function(firstDo = 0) {
        let url = document.getElementById('date_field').value;
        if(firstDo === 1) {
          url = dateGet(1);
        }
        console.log(url);

        fetch(requestURL() + "/detail/month/" + url, {
          credentials: 'include'
        }).then(function(res) {
          return res.json();
        }).then(function(data) {
          console.log(data);
          if(data) {
            items.value = data.data;

            for(let for_a = 0; for_a < data.data.length; for_a++) {
              if(data.data[for_a].type === '-') {
                out_money.value += data.data[for_a].amount;
              } else {
                in_money.value += data.data[for_a].amount;
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
        out_money,
        in_money
      };
    },
    mounted() { 
      this.fetchData(1);
    },
  };
</script>
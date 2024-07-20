<template>
  <input id="date_field" type="month" @change="fetchData()" />
  <br />
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
    name: 'AccountToday',
    computed: {
      displayedItems() {
        return this.items;
      }
    },
    setup() {
      const items = ref([]);
      const fetchData = function(firstDo = 0) {
        let url = document.getElementById('date_field').value;
        if(firstDo === 1) {
          url = dateGet(1);
        }
        console.log(url);

        fetch(requestURL() + "/detail/today", {
          credentials: 'include'
        }).then(function(res) {
          return res.json();
        }).then(function(data) {
          console.log(data);
          if(data) {
            items.value = data.data;
          }
        }).catch(function(e) {
          console.log('서버 응답 없음');
        });
      }

      return {
        items,
        fetchData
      };
    },
    mounted() { 
      this.fetchData(1);
    },
  };
</script>
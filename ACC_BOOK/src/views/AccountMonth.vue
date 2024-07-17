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
  import requestURL from '@/utils/requestURL.js';
  import dateGet from '@/utils/date.js';

  export default {
    name: 'AccountMonth',
    computed: {
      displayedItems() {
        return this.items;
      } 
    },
    mounted() { 
      this.fetchData(1);
    },
    methods: {
      fetchData(firstDo = 0) {
        let url = document.getElementById('date_field').value;
        if(firstDo === 1) {
          url = dateGet(1);
        }
        console.log(url);

        fetch(requestURL() + "/account/today/" + url).then(function(res) {
          return res.json();
        }).then(function(data) {
          if(data && data.success === "yes") {
            this.items = data.data;
          }
        }).catch(function(e) {
          console.log('서버 응답 없음');
        });
      }
    }
  };
</script>
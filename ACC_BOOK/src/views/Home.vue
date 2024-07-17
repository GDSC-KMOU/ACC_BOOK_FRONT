<template>
    <ul>
        <li>오늘의 날짜 : <TodayDate /></li>
        <li>총 잔고 : <Balance /></li>
    </ul>
</template>

<script>
  import TodayDate from '@/components/TodayDate.vue';
  import Balance from '@/components/Balance.vue';

  export default {
    name: 'Home',
    components: {
      TodayDate,
      Balance
    }
  };
</script>
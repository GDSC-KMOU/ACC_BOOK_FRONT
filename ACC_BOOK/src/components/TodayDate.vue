<template>
  <span>{{TodayDate}}</span>
</template>

<script>
  "use strict";

  import dateGet from '@/utils/date.js';

  export default {
    name: 'TodayDate',
    data() {
      return {
        TodayDate: this.getCurrentDate()
      };
    },
    methods: {
      getCurrentDate() {
        return dateGet();
      }
    }
  };
</script>
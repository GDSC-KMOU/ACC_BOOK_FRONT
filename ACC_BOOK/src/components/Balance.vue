<template>
  <span>{{Balance}}</span>
</template>

<script>
  "use strict";
  
  export default {
    name: 'Balance',
    data() {
      return {
        Balance: this.getBalance()
      };
    },
    methods: {
      getBalance() {
        return "Test";
      }
    }
  };
</script>
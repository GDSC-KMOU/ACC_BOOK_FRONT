<template>
  <span>{{Balance}}</span>
</template>

<script>
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
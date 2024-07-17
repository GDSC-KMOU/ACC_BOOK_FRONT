<template>

</template>

<script>
  import requestURL from '@/utils/requestURL.js';

  export default {
    name: 'Logout',
    setup() {
      fetch(requestURL() + "/logout");
      window.location.pathname = '/';
    }
  }
</script>
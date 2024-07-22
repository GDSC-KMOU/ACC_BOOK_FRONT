<template>

</template>

<script>
  "use strict";

  import requestURL from '@/utils/requestURL.js';

  export default {
    name: 'Logout',
    setup() {
      fetch(requestURL() + "/logout", {
        method: "POST",
        credentials: 'include'
      }).then(function(res) {
        return res.json();
      }).then(function(data) {
        if(data) {
          window.location.pathname = '/login';
        }
      })
    }
  }
</script>
<template>

</template>

<script>
  "use strict";

  import requestURL from '@/utils/requestURL.js';

  export default {
    name: 'Logout',
    setup() {
      fetch(requestURL() + "/logout", {
        method: "POST"
      }).then(function(res) {
        return res.json();
      }).then(function(data) {
        console.log(data);

        if(data) {
        }
      })
    }
  }
</script>
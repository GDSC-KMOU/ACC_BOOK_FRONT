<template>
  <header>
    <nav>
      <span>가계부 프로젝트</span>
      <ul>
        <li><a href="/">메인</a></li>
        <li><a href="/account/today">오늘</a></li>
        <li><a href="/account/month">월별</a></li>
        <LoginButton />
      </ul>
    </nav>
  </header>
  <article>
    <router-view></router-view>
  </article>
  <footer>
    <nav>
      <ul>
        <li><span>KMOU-GDSC</span></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
  "use strict";
  
  import LoginButton from '@/components/LoginButton.vue';

  export default {
    name: 'Home',
    components: {
      LoginButton
    }
  };
</script>
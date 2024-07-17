<template>
  <header>
    <nav>
      <span>가계부 프로젝트</span>
      <ul>
        <li><a href=".">메인</a></li>
        <li><a href=".">월별 내역</a></li>
        <li><a href=".">일별 내역</a></li>
        <li><a href=".">로그인</a></li>
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
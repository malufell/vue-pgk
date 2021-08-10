<template>
  <div id="app">

      <nav class="menu">
        <h1> área do menu </h1>
      </nav>

      <main class="content">
        <header class="header">
          Page Title
        </header>

        <article class="card">
          <div class="card__header card__box">
            <span>ID</span>
            <p>Título</p>
          </div>
          
          <div class="card__content card__box">
            <span>1</span>
            <p>Lorem ipsum</p>
            <a class="card__content__link" href="#">Ver</a>
          </div>

          <div class="card__content card__box">
            <span>2</span>
            <p>Lorem ipsum</p>
            <a class="card__content__link" href="#">Ver</a>
          </div>
        </article>
      </main>

  </div>
</template>

<script>

</script>

<style lang="scss">

  $bg-color: #E8F0F2;
  $menu-width-desktop: 200px;
  $menu-height-mobile: 100px;
  $gap: 20px;
  $breakpoint-small: 768px;

  @mixin alignFlex($justify-content){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: $justify-content;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: grid;
    grid-template-areas: 
      "menu content";
    grid-template-columns: $menu-width-desktop auto;
    grid-template-rows: 100vh;
    grid-gap: $gap;

    @media (max-width: $breakpoint-small) {
      grid-gap: 0;
      grid-template-columns: 100%;
      grid-template-rows: $menu-height-mobile 100vh;
      grid-template-areas: 
        "menu" 
        "content";
    }
  }

  .menu {
    grid-area: "menu";
    @include alignFlex(center);
    background-color: $bg-color;

    @media (max-width: $breakpoint-small) {
      border-bottom: solid 1px white;
    }
  }

  .content {
    grid-area: "content";
    @include alignFlex(justify-content);
    background-color: $bg-color;
    position: relative;
  }

  .header {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    background: white;
    border: 1px solid lightgray;
    height: 100px;
    width: 100%;
    font-size: 1.5rem;
    padding: 20px;

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: 70px;
      margin-top: 20px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    width: 96%;
    gap: 3px;
    margin-top: 140px;

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: 70px;
    }

    &__box {
      padding: 10px;
      background: white;
      border: 1px solid lightgray;
      height: 60px;
      align-items: center;
    }

    &__header {
      display: grid;
      grid-template-columns: 50px auto;
     }

    &__content {
      display: grid;
      grid-template-columns: 50px auto 50px;

      &__link {
        @media (max-width: $breakpoint-small) {
          display: none;
        }
      }
    }
  } 
    
</style>

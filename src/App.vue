<template>

  <div id="app">

      <nav class="menu">
        <h1> área do menu </h1>
      </nav>

      <main class="content">
        <section>
          <h1>área de conteúdo</h1>
        </section>
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

  @mixin centerFlex(){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    @include centerFlex();
    background-color: $bg-color;

    @media (max-width: $breakpoint-small) {
      border-bottom: solid 1px white;
    }
  }

  .content {
    grid-area: "content";
    @include centerFlex();
    background-color: $bg-color;
  }
  
</style>

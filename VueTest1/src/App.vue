<template>
  <div id="app">
    <div id="menu">
      <ul>
        <li><router-link :to="{path: '/about'}">hello~</router-link></li>
        <li><router-link :to="{path: '/home'}">嗯哼～</router-link></li>
      </ul>
    </div>
    <div id="content"><router-view/></div>
    <footer></footer>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  #menu {
    float: left;
    margin-right: 25px;
    margin-top: 30px;
    background-color: darkslategrey;
    height: 100%;
    width: 20%;
  }

  #menu ul {
    list-style-type: none;
  }

  #content {
    margin-left: 25%;
    width: 80%;
  }

  a {
    color: aquamarine;
  }

</style>

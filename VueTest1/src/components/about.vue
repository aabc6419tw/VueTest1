<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <h2>{{ hello }}</h2>
  <input type="text" v-model="hello"/>
    <input type="checkbox" v-model="toggle"/>{{toggle}}
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        msg: '關於我',
        hello: 'hihi 我是喔啊',
        toggle: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

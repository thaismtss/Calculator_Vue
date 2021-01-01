<template>
<div id="app">
  <h1>Calculadora</h1>
  <Calculator/>
</div>
</template>

<script>
import Calculator from "./view/Calculator.vue"
export default {
  components: {Calculator}

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

* {
  font-family: "Roboto Mono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, #c33764, #1d2671); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
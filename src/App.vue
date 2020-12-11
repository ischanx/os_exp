<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">实验1</router-link> |
      <router-link to="/exp2">实验2</router-link> |
      <router-link to="/exp3">实验3</router-link> |
      <router-link to="/exp4">实验4</router-link>
    </div>
    <router-view id="router"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}
#router{
  margin:0 auto;
  width: 90%;
  padding: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

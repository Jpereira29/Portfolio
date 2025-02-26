<template>
  <header>
    <div class="container">
      <h1>Jorge Pereira</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #18191c;
  color: white;
  padding: 10px 0;
  text-align: center;
  border-bottom: #0277fdff 1px solid;
}
nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 400;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1220px;
  margin: 0 auto;
  height: 40px;
}
</style>

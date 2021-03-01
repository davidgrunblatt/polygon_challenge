<template>
  <header class="shadow">
    <div>
      <router-link to='/'>
        <img src="../assets/images/logo.svg" alt="" />
      </router-link>
    </div>
    <div>
      <nav>
        <router-link to='/signup'>
          <div class="text-center">
            <v-btn
            rounded
            color="primary"
            dark
            > 
            Get Started
            </v-btn>
          </div>
      </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  background: #fff;
  z-index: 1;
}
header img {
  max-width: 200px;
}

@media screen and (max-width: 768px) {
  header button {
    display: none;
  }
}
</style>

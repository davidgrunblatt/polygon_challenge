<template>
  <section id="hero" class="center-column">
    <div>
      <img class="logo" src="../assets/images/logo.svg" alt="Poly" />
    </div>
    <div>
      <h1>Discover your difference, harness your strengths</h1>
      <p>Tele-assessments and support for learning differences.</p>
      <div class="text-center">
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
      </div>
    </div>
    <div>
      <img class="hero-img" src="../assets/images/hero.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "hero"
};
</script>

<style scoped>
.logo {
  max-width: 300px;
}
.hero-img {
  width: 700px;
}
div {
  margin: 10px auto;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .hero-img {
    width: 300px;
    margin-top: 20px;
  }
}
</style>

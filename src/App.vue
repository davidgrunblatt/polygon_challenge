<template>
  <v-app>
    <v-main>
      <router-view>
        <Home />
        <Signup />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';
import Signup from './views/Signup';

export default {
  name: "App",

  components: {
    Home,
    Signup
  },

  data: () => {
    return {
    }
  }
};
</script>

<style>
  section {
    margin: 30px auto;
    padding: 10px 5px;
  }
  .text-container {
    max-width: 700px;
    min-height: 300px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex {
    display: flex; 
    flex-wrap:wrap; 
    justify-content: center; 
    align-items: center;
  }
  h1 {
    font-size: 40px;
  }
  button {
    margin: 10px auto;
  }
  .shadow {
    box-shadow: 2px 3px 3px rgb(219, 219, 219);
  }

  .services-parent {
    background: rgb(222, 240, 255);
    padding: 30px 5px;
  }
  .services-parent h1 {
    text-align: center;
    /* margin-bottom: -20px; */
  }
  .services-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
  }
  .services-container img {
    margin: 20px;
    max-width: 300px;
  }
  .services-container p {
    max-width: 500px;
    min-width: 300px;
  }
  .service-card-container {
    flex: 1;
    max-width: 300px;
    padding: 3px;
    background: #fff;
    border-radius: 20px;
    margin: 10px;
  }
  .service-card-container p {
    padding: 10px;
    min-width: 200px;
  }
  .service-card-container img {
    max-width: 80px;
  }
  .reviews-container {
    margin-bottom: 30px;
    min-height: 500px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .reviews-container p {
    max-width: 500px;
    font-size: 30px;
  }
  .reviews-container img {
    max-width: 290px;
  }
  footer {
    height: 50px;
    background: rgb(230, 230, 230);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  ul {
    list-style: none;
  }
  .continue-btn {
    padding: 30px;
    border: solid thin rgba(192, 192, 192, 0.185);
    width: 200px;
  }
  .survey-container {
    padding: 10px;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .question-card {
    width: 300px;
    margin: 20px auto;
    transition-property: border;
    transition-duration: 1s;
  }
  .question-card p {
    font-size: 25px;
  }
  .question-card:hover {
    opacity: 0.5;
    border: solid thin #000;
  }
  .v-text-field {
    height: 100px;
  }

  @media screen and (max-width: 768px) {
  h1 {
    font-size: 30px;
  }
}
</style>

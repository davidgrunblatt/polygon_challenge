<template>
  <div class="home">
    <Navbar />
    <Hero />

    <section>
      <div class='text-container'>
        <h1>Our Mission</h1>
        <p>
          Polygon is on a mission to give every person with a learning difference the full range of 
          tools they need to thrive — from diagnosis to support. We believe that by helping people 
          discover their differences, they can harness their strengths.
        </p>
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
    </section>

    <section>
      <div class='services-parent shadow'>
        <div>
          <h1>Our Services</h1>
        </div>
        <div class='services-container flex'>
            <div class='service-card-container text-container' v-for="service in services" v-bind:key="service.id">
              <img :src='service.img' alt='' />
              <h3>{{service.title}}</h3>
              <p>{{service.description}}</p>
            </div>
        </div>

        <div class='services-container'>
          <div>
            <h2>Who's it for?</h2>
            <p>
              An assessment with a Polygon psychologist is appropriate for anyone 
              age 8 or older.As soon as you suspect a learning or attention difference, 
              you should consider an assessment. Interventions are most successful when 
              learning differences are diagnosed early in life. Still, an evaluation at any 
              age can be an important step toward receiving proper support.
            </p>
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
          <div>
            <img src='../assets/images/super.svg' alt='' />
          </div>
        </div>

      </div>
    </section>
    
    <template>
      <div class="reviews-container">
        <div>
          <p>
            "<strong>My diagnosis changed my life.</strong> For the first time, I was in control. 
            I understood why I felt different and how to tailor my education to my needs."
          </p>
        </div>
        <div>
          <img class='shadow' src="../assets/images/headshot_0.png" alt="" />
        </div>
      </div>
    </template>

    <Questions />
    <Footer />
  </div>
</template>

<script>
// components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Questions from '../components/Questions';
import icon_0 from "../assets/images/icon_0.png";
import icon_1 from "../assets/images/icon_1.png";
import icon_2 from "../assets/images/icon_2.svg";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Questions,
    Footer
  },
  data() {
    return {
      services: [
              {
          id: 0,
          title: "Learning difference assessment",
          description:
            "Comprehensive assessment for dyslexia, dyscalculia, and other learning differences in reading, math, and writing.",
          img: icon_0
        },
        {
          id: 1,
          title: "Attention differences assessment",
          description:
            "Comprehensive assessment for dyslexia, dyscalculia, and other learning differences in reading, math, and writing.",
          img: icon_1
        },
        {
          id: 2,
          title: "Follow-up support",
          description:
            "Comprehensive assessment for dyslexia, dyscalculia, and other learning differences in reading, math, and writing.",
          img: icon_2
        }
      ]
    }
  }
};
</script>

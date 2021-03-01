<template>
   <div>
    <Navbar />

    <section>
      <div class='survey-container' v-if='count < 2'>
        <h1>{{survey_questions[count].headline}}</h1>

          <div v-on:click="handler" v-for='question in survey_questions[count].question' :key="question.id">
            <button class="question-card continue-btn shadow" :id="question.id"><p>{{question.q}}</p></button>
          </div>

        <button v-on:click='nextQuestion'>
            <div class="text-center">
              <v-btn
              rounded
              color="primary"
              dark
              > 
              Continue
              </v-btn>
            </div>
        </button>
        <div>
          <h3>{{count + 1}}/3</h3>
        </div>
      </div>
    </section>

    <section>
      <div class='survey-container' v-if="count == 2">
        <Form />
      </div>
    </section>

   </div>
</template>

<script>
import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
import Form from '../components/Form';

export default {
  name: "Signup",
  components: {
    Navbar,
    // Footer,
    Form
  },
  data: () => {
    return {
      test: 'hello',   
      count: 0,   
      survey_questions: [{id:0, headline: 'Hello!', question: [{id:undefined, q: "Let's get you started with a free consultation"}]}, {id:1, headline: 'Who\'s this assessment for?', question: [{id:0, q:"Myself"}, {id:1, q:"My Child"}, {id:2, q:"Someone else"}]}],
      answer: undefined
    }
  },
  methods: {
    nextQuestion: function() {
      if (this.answer == undefined && this.count > 0) {
        return;
      }
      if (this.count >= 2) {
        this.count = 0;
      }
      this.count++;
    },
    handler: function(e) {
      if (e.target.id == 0) {
        this.answer = "Myself";
      }
      else if (e.target.id == 1) {
        this.answer = "My child";
      }
      else if (e.target.id == 2) {
        this.answer = "Someone else";
      }
    }
  }
};
</script>

<template>
  <div>
        <div v-if='!formComplete'>
          <h1>How can we contact you?</h1>
          <form>
              <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              ></v-text-field>
              <!-- <v-select
              v-model="select"
              :items="items"
              :error-messages="selectErrors"
              label="Item"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
              ></v-select> -->
              <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="I am not a robot?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn
              class="mr-4"
              @click="submit"
              >
              submit
              </v-btn>
              <v-btn @click="clear">
              clear
              </v-btn>
          </form>
        </div>

        <section v-if='formComplete'>
          <div class='survey-container'>
            <h1>Thank you!</h1>
            <p>We look forward to speaking with you.</p>
            <router-link to='/'>
                <div class="text-center">
                  <v-btn
                  rounded
                  color="primary"
                  dark
                  > 
                  Home
                  </v-btn>
                </div>
            </router-link>
          </div>
        </section>

  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    name:'Form',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(120) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      formComplete: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        if (this.name && this.email && this.checkbox) {
            this.formComplete = true;
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
<template lang="html">
  <!-- <div class="container">
    <h2 class="text-center text-uppercase text-secondary mb-0">Login</h2>
    <hr class="star-dark mb-5">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div style="margin:0 auto;" class="fb-login-button" data-width="100" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" scope="public_profile,email" onlogin="statusChangeCallback();"></div>
        <form name="loginForm" id="login-form" novalidate="novalidate">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Email Address</label>
              <input class="form-control" id="email-login" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." v-model="emailLogin">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Password</label>
              <input class="form-control" id="password-login" type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your password." v-model="passwordLogin">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-xl" id="loginButton" v-on:click="login">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div> -->
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field></v-text-field>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    name: '',
    email: '',
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   select: this.select,
        //   checkbox: this.checkbox
        // })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="css">
</style>

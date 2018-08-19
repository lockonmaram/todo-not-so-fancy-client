Vue.component('Login',{
    template: `
    <section class="content-section bg-light" v-if="!token" id="login">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Login</h2>
        <hr class="star-dark mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
            <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
            <div style="margin:0 auto;" class="fb-login-button" data-width="100" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" scope="public_profile,email" onlogin="checkLoginState"></div>
            <form name="loginForm" id="login-form" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input class="form-control" id="email-login" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." v-model="email">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Password</label>
                  <input class="form-control" id="password-login" type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your password." v-model="password">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br>
              <div id="success"></div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-xl" id="loginButton" v-on:click="loginChild">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`,
    data: function(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        loginChild(){
            event.preventDefault()
            this.$emit('login-click', {
                email: this.email,
                password: this.password
            })
        }
    },
    props: ['token'],
})

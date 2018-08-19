Vue.component('Register',{
    template: `
    <section class="content-section bg-light" v-if="!token" id="signup">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Register</h2>
        <hr class="star-dark mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
            <!-- The form should work on mconsole.log('already registered');ost web servers, but if the form is not working you may need to configure your web server differently. -->
            <form name="registerForm" id="register-form" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>First Name</label>
                  <input class="form-control" id="fname" type="text" placeholder="First Name" required="required" data-validation-required-message="Please enter your first name." v-model="first_name">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Last Name</label>
                  <input class="form-control" id="lname" type="tel" placeholder="Last Name" required="required" data-validation-required-message="Please enter your last name." v-model="last_name">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." v-model="email">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Password</label>
                  <input class="form-control" id="password" type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your password." v-model="password">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br>
              <div id="success"></div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-xl" id="registerButton" v-on:click="signUpChild">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`,
    data: function(){
        return {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        }
    },
    methods: {
        signUpChild(){
            event.preventDefault()
            this.$emit('register-click', {
                email: this.email,
                first_name: this.first_name,
                last_name: this.last_name,
                password: this.password
            })
        }
    },
    props: ['token'],
})

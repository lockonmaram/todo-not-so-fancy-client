Vue.component('Help',{
    template: `
    <section class="content-section bg-primary text-white text-center" id="services">
      <div class="container">
        <div class="content-section-heading">
          <h3 class="text-secondary mb-0">Services</h3>
          <h2 class="mb-5">What You Can Do</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <a class="js-scroll-trigger" href="#login">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-user"></i>
              </span>
            </a>
            <h4>
              <strong>Login</strong>
            </h4>
            <p class="text-faded mb-0">Start by logging in / register your account!</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <a class="js-scroll-trigger" href="#task">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-list"></i>
              </span>
            </a>
            <h4>
              <strong>Todo</strong>
            </h4>
            <p class="text-faded mb-0">Input your task!</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
            <a class="js-scroll-trigger" href="#task">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-check"></i>
              </span>
            </a>
            <h4>
              <strong>Achieve</strong>
            </h4>
            <p class="text-faded mb-0">Complete your task!</p>
          </div>
          <div class="col-lg-3 col-md-6">
            <a class="js-scroll-trigger" href="#task">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-social-twitter"></i>
              </span>
            </a>
            <h4>
              <strong>Tweet</strong>
            </h4>
            <p class="text-faded mb-0">Brag about your achievement!</p>
          </div>
        </div>
      </div>
    </section>`
})

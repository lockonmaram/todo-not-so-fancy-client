Vue.component('Headr',{
    template: `
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1">ToDo App</h1>
        <h3 class="mb-5">
          <em>A Simple Task Management App!</em>
          <br>
          <em v-if="token">Welcome {{first_name}}!</em>
        </h3>
        <a class="btn btn-primary btn-xl js-scroll-trigger" v-if="!token" href="#login">Login</a>
        <a class="btn btn-primary btn-xl js-scroll-trigger" v-else v-on:click="logoutChild()">Logout</a>
      </div>
      <div class="overlay"></div>
    </header>`,
    methods: {
        logoutChild(){
            event.preventDefault()
            this.$emit('logout-click')
        }
    },
    props: ['token', 'first_name'],
})

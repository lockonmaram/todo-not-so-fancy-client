Vue.component('nav-menu',{
    template: `
    <nav id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a class="js-scroll-trigger" href="#page-top">ToDoApp</a>
        </li>
        <li class="sidebar-nav-item" v-if="!token">
          <a class="js-scroll-trigger" href="#page-top">Home</a>
        </li>
        <li class="sidebar-nav-item" v-if="token">
          <a class="js-scroll-trigger" href="#page-top">{{ first_name }}</a>
        </li>
        <li class="sidebar-nav-item" v-if="!token">
          <a class="js-scroll-trigger" href="#login">Login</a>
        </li>
        <li class="sidebar-nav-item" v-if="!token">
          <a class="js-scroll-trigger" href="#signup">Register</a>
        </li>
        <li class="sidebar-nav-item" v-if="token">
          <a class="js-scroll-trigger" href="#task">Task</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#services">Help</a>
        </li>
      </ul>
    </nav>`,
    props: ['token', 'first_name'],
})

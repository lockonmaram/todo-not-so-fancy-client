import Vue from 'vue'
import Vuex from 'vuex'
import { firebase, auth, fbProvider, twitterProvider } from '@/firebase/firebase.js'
import axios from 'axios'
import swal from 'sweetalert2'
import route from './router.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('token') || false
  },
  mutations: {

  },
  actions: {
    fbLogin() {
      firebase.auth().signInWithPopup(fbProvider)
      .then(result => {
        console.log(result, 'ini result');
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        axios.post('http://localhost:3000/fblogin', {},{
          headers: {
            token: token
          }
        })
        .then(function (response) {
          localStorage.setItem('token', response.data.data.token)
          swal(
            'Yeay!',
            'You have logged in!',
            'success'
          )
          route.push('/about')
        })
        .catch(function (error) {
          swal({
            type: 'error',
            title: 'Something went wrong!',
            text: `${error.message}`,
          })
        });
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error, 'ini error');
        swal({
          type: 'error',
          title: 'Something went wrong!',
          text: `${error.message}`,
        })
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
    twitterLogin(){
      firebase.auth().signInWithPopup(twitterProvider)
      .then(function(result) {
        console.log(result);
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
    signUp: function(){
      event.preventDefault()

      axios.post('http://localhost:3000/signup', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      })
      .then(res=>{
        // console.log(res.data);
        this.token = res.data
        // console.log(this.token);
        localStorage.setItem('authorization', res.data.token);
        localStorage.setItem('id', res.data.userId);
        localStorage.setItem('first_name', res.data.first_name);
        localStorage.setItem('last_name', res.data.last_name);
        swal("Yeay", "You are logged in!", "success");
      })
    },
    login: function(){
      event.preventDefault()

      axios.post('http://localhost:3000/login', {
        email: this.emailLogin,
        password: this.passwordLogin
      })
      .then(res=>{
        console.log('resasdfadsf',res);
        // console.log(this.userId);
        // console.log(this.token);
        localStorage.setItem('authorization', res.data.token);
        localStorage.setItem('id', res.data.userId);
        localStorage.setItem('first_name', res.data.first_name);
        localStorage.setItem('last_name', res.data.last_name);
        swal("Yeay", "You are logged in!", "success");
      })
    },
    logout: function(){
      // event.preventDefault()
      localStorage.clear();
      swal("You have logged out", "See you later!");
      route.push('/')
    },
    getTask: function(){
      // event.preventDefault()
      axios.post('http://localhost:3000/todos',{
        userId: this.userId
      })
      .then(todos=>{
        this.todos = todos.data
      })
    },
    addTask: function(){
      // event.preventDefault()

      axios.post('http://localhost:3000/todos/add',{
        task: this.task,
        priority: this.priority,
        userId: this.userId
      })
      .then(task=>{
        swal("Yeay", "You have added a task!", "success");
        window.location.assign('http://localhost:8080')
      })
    },
    notToDone: function(todoId){
      event.preventDefault()
      axios.put('http://localhost:3000/todos/updateDone',{
        todoId: todoId
      })
      .then(done=>{
        window.location.assign('http://localhost:8080')
      })
    },
    doneToNot: function(todoId){
      event.preventDefault()
      axios.put('http://localhost:3000/todos/updateNot',{
        todoId: todoId
      })
      .then(not=>{
        window.location.assign('http://localhost:8080')
      })
    },
    deleteTask: function(todoId){
      // event.preventDefault()
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this task!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete('http://localhost:3000/todos/delete',{data:{
            todoId: todoId
          }})
          .then(result=>{
            // console.log('----res',result);
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            window.location.assign('http://localhost:8080')
          })
        } else {
          swal("Your task is safe!");
        }
      });
    },
    tweetTask: function(todo){
      axios.post('http://localhost:3000/api/tweet',{
        todo: todo
      })
      .then(result=>{
        window.open('https://twitter.com/')
        swal("Yeay", "You have tweeted your task!", "success");
      })
    }
  }
})

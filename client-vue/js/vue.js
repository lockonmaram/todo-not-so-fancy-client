var app = new Vue({
        el: '#app',
        data: {
          userId: localStorage.getItem('id'),
          first_name: localStorage.getItem('first_name'),
          last_name: localStorage.getItem('last_name'),
          token: localStorage.getItem('authorization'),
          email: null,
          password: null,
          emailLogin: null,
          passwordLogin: null,
          task: null,
          priority: 'low',
          todos: null
        },
        methods: {
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
              localStorage.clear();
              swal("You are registered!", "Please login :)", "success")
              .then(result=>{
                window.location.assign('http:///localhost:8080/#login')
              })
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
              this.token = res.data.token
              this.userId = res.data.userId
              this.first_name = res.data.first_name
              this.last_name = res.data.last_name
              // console.log(this.userId);
              // console.log(this.token);
              localStorage.clear();
              localStorage.setItem('authorization', res.data.token);
              localStorage.setItem('id', res.data.userId);
              localStorage.setItem('first_name', res.data.first_name);
              localStorage.setItem('last_name', res.data.last_name);
              swal("Yeay", "You are logged in!", "success")
              .then(result=>{
                window.location.assign('http:///localhost:8080')
              })
            })
          },
          logout: function(){
            // event.preventDefault()
            this.token = null
            this.userId = null
            this.first_name = null
            this.last_name = null
            localStorage.clear();
            swal("You have logged out", "See you later!");
          },
          getTask: function(){
            // event.preventDefault()
            axios.get(`http://localhost:3000/todos/${this.userId}`)
            .then(todos=>{
              this.todos = todos.data
            })
          },
          addTask: function(){
            event.preventDefault()

            axios.post(`http://localhost:3000/todos/${this.userId}/add`,{
              task: this.task,
              priority: this.priority
            })
            .then(task=>{
              console.log(task);
              swal("Yeay", "You have added a task!", "success")
              .then(result=>{
                window.location.href='http://localhost:8080/#task'
              })
            })
          },
          notToDone: function(todoId){
            event.preventDefault()
            axios.put('http://localhost:3000/todos/updateDone',{
              todoId: todoId
            })
            .then(done=>{
              window.location.reload()
            })
          },
          doneToNot: function(todoId){
            event.preventDefault()
            axios.put('http://localhost:3000/todos/updateNot',{
              todoId: todoId
            })
            .then(not=>{
              window.location.reload()
            })
          },
          updatePrior: function(todoId, prior){
            event.preventDefault()
            axios.put('http://localhost:3000/todos/updateNot',{
              todoId: todoId,
              priority: prior
            })
            .then(result=>{
              window.location.reload()
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
                  })
                  .then(ok=>{
                    window.location.reload()
                  })
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
        },
        created(){
          this.getTask()
        },
      })

var app = new Vue({
        el: '#app',
        data: {
          userId: localStorage.getItem('id'),
          first_name: localStorage.getItem('first_name'),
          last_name: localStorage.getItem('last_name'),
          token: localStorage.getItem('authorization'),
          emailLogin: null,
          passwordLogin: null,
          task: null,
          priority: 'low',
          todos: null
        },
        methods: {
          signUp: function(value){
            event.preventDefault()
            console.log('ini value', value);
            axios.post('https://todonotsofancyserver.lockonmaram.com/signup', {
              first_name: value.first_name,
              last_name: value.last_name,
              email: value.email,
              password: value.password
            })
            .then(res=>{
              // console.log(res.data);
              this.token = res.data
              // console.log(this.token);
              localStorage.clear();
              swal("You are registered!", "Please login :)", "success")
              .then(result=>{
                window.location.assign('https://todonotsofancy.lockonmaram.com/#login')
              })
            })
          },
          login: function(value){
            event.preventDefault()

            axios.post('https://todonotsofancyserver.lockonmaram.com/login', {
              email: value.email,
              password: value.password
            })
            .then(res=>{
              // console.log('resasdfadsf',res);
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
                window.location.reload()
              })
            })
          },
          logout: function(){
            // event.preventDefault()
            this.token = null
            this.userId = null
            this.first_name = null
            this.last_name = null
            this.todos = null
            localStorage.clear();
            swal("You have logged out", "See you later!");
          },
          getTask: function(){
            // event.preventDefault()
            axios.get(`https://todonotsofancyserver.lockonmaram.com/todos/${this.userId}`)
            .then(todos=>{
              this.todos = todos.data
            })
          },
          addTask: function(value){
            event.preventDefault()

            axios.post(`https://todonotsofancyserver.lockonmaram.com/todos/${this.userId}/add`,{
              task: value.task,
              priority: value.priority
            })
            .then(task=>{
              // console.log(task);
              swal("Yeay", "You have added a task!", "success")
              .then(result=>{
                window.location.reload()
              })
            })
          },
          notToDone: function(value){
            console.log(value);
            event.preventDefault()
            axios.put('https://todonotsofancyserver.lockonmaram.com/todos/updateDone',{
              todoId: value.todoId
            })
            .then(done=>{
              window.location.reload()
            })
          },
          doneToNot: function(value){
            console.log(value);
            event.preventDefault()
            axios.put('https://todonotsofancyserver.lockonmaram.com/todos/updateNot',{
              todoId: value.todoId
            })
            .then(not=>{
              window.location.reload()
            })
          },
          deleteTask: function(value){
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
                axios.delete('https://todonotsofancyserver.lockonmaram.com/todos/delete',{data:{
                  todoId: value.todoId
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
            let message
            let prior
            if (todo.priority === 'low') {
              prior = 'someday'
            }else if (todo.priority === 'medium') {
              prior = 'in a minute'
            }else if (todo.priority === 'high') {
              prior = 'as soon as possible'
            }
            if (todo.done === 'false') {
              message = `I%20will%20do%20a%20task:%20${todo.task},%20${prior}`
            }else if (todo.done === 'true') {
              message = `I%20have%20done%20the%20task:%20${todo.task}`
            }
            window.open(`https://twitter.com/intent/tweet?text=${message}&hashtags=ToDoApp`)
          }
        },
        created(){
          this.getTask()
        },
      })

Vue.component('Tasks',{
    template: `
    <section class="content-section bg-light" v-if="token" id="task">
      <div style="overflow-x:auto;" class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Tasks</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Tweet</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos">
              <td>{{todo.task}}</td>
              <td>{{ todo.priority }}</td>
              <td v-if="todo.done === 'false'"><button type="button" class="btn btn-danger" v-on:click="notToDoneChild(todo._id)">Not Done</button></td>
              <td v-if="todo.done === 'true'"><button type="button" class="btn btn-primary" v-on:click="doneToNotChild(todo._id)">Done</button></td>
              <td><button type="button" class="btn btn-info" v-on:click="tweetTaskChild(todo)">Tweet</button></td>
              <td><button type="button" class="btn btn-danger" v-on:click="deleteTaskChild(todo._id)">X</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>`,
    methods: {
        notToDoneChild(id){
            event.preventDefault()
            this.$emit('check', {
                todoId: id
            })
        },
        doneToNotChild(id){
            event.preventDefault()
            this.$emit('cross', {
                todoId: id
            })
        },
        tweetTaskChild(todo){
            event.preventDefault()
            this.$emit('tweet', todo)
        },
        deleteTaskChild(id){
            event.preventDefault()
            this.$emit('delete', {
                todoId: id
            })
        },
    },
    props: ['token', 'todos'],
})

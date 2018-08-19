Vue.component('Add',{
    template: `
    <section class="content-section bg-light" v-if="token" id="add">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Add New Task</h2>
        <hr class="star-dark mb-5">
        <form class="taskForm" id="task-form" novalidate="novalidate">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Add New Task</label>
              <input class="form-control" id="task-add" type="task" placeholder="Input Task Here" required="required" data-validation-required-message="Input your task" v-model="task">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2" v-model="priority">
              <label>Priority</label>
              <select class="form-control" id="priority-add" required="required" data-validation-required-message="Input your priority" v-model="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-xl" id="addTaskButton" v-on:click="addTaskChild">Add Task</button>
          </div>
        </form>
      </div>
    </section>`,
    data: function(){
        return {
            task: '',
            priority: 'low'
        }
    },
    methods: {
        addTaskChild(){
            event.preventDefault()
            this.$emit('add-click', {
              task: this.task,
              priority: this.priority
            })
        }
    },
    props: ['token'],
})

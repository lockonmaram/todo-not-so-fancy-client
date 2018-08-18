<template>
  <div class="navbar">
    <v-navigation-drawer
    v-model="drawer"
    clipped
    fixed
    app
    >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="success">home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="warning">list</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Tasks</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>ToDoAPP</v-toolbar-title>
    <v-flex offset-xs9 align-end>
      <div>
        <v-btn v-if="isLoggedIn === false" flat color="primary" @click="fbLogin">Login</v-btn>
        <v-btn v-else-if="isLoggedIn !== false" flat color="primary" @click="logout">Logout</v-btn>
      </div>
    </v-flex>
  </v-toolbar>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'NavBar',
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  methods: {
    ...mapActions([
      'fbLogin',
      'logout'
    ])
  },
  computed: {
    ...mapState([
      'isLoggedIn'
    ])
  },
}
</script>

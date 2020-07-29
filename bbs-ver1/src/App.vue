<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/jsonboard">
          <v-list-item-action>
            <v-icon>mdi-clipboard-text-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>JSON PLACEHOLDER BOARD</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/crudboard">
          <v-list-item-action>
            <v-icon>mdi-clipboard-edit-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>CRUD BOARD</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SINSA BBS</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <span
        >&copy; {{ new Date().getFullYear() }} Sinsa all rights reserved</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  components: {},
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

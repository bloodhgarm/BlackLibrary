<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-xs-and-up">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in button" :key="item.id" :to = "item.route" @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-items>
        <img class="logo" src="../assets/image/logo.jpg" alt="altText"/>
      </v-toolbar-items>
      <v-toolbar-title>BloodHgarm</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-and-down">
        <v-btn class="black" depressed  v-for="item in button" :key="item.id" :to = "item.route">
          <v-icon left v-html="item.icon"></v-icon> {{ item.title }}
        </v-btn>
        <v-btn class="black" depressed @click="dialog = true" v-if="isUserAuthentificated">
          <v-icon left >mdi-logout</v-icon> Выйти
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Действительно выйти?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Нет
          </v-btn>

          <v-btn color="green darken-1" text @click="signout(), dialog = false">
            Да
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
export default {

  data: () => ({
    drawer: false,
    dialog: false,
  }),
  computed: {
    isUserAuthentificated(){
      return this.$store.getters.isUserAuthentificated
    },
     button(){
       if(this.isUserAuthentificated === true){
         return[
          {
              icon: 'mdi-eye',
              title: "Читать",
              route: "/books"
          },
          {
              icon: "mdi-book-open-page-variant",
              title: "Учить слова",
              route: "/words"
          },
          {
              icon: 'mdi-account',
              title: "Мой кабинет",
              route: "/profile"
          }
         
        ] 
      }
      return[
        {
            icon: 'mdi-eye',
            title: "Читать",
            route: "/books"
        },
        {
            icon: "mdi-login",
            title: "Войти",
            route: "/signin"
        },
        {
            icon: "mdi-smart-card-outline",
            title: "Зарегестрироваться",
            route: "/signup"
        },
      ] 
    },
  },
  methods: {
    signout(){
      this.$store.dispatch('SIGNOUT')
    }
  },
}
</script>

<style lang="scss" scoped>
.logo{
  margin-right: 10px !important;
}
</style>
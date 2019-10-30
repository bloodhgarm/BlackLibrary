<template>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="black"
                dark
                flat
              >
                <v-toolbar-title>Войти</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-alert :value="error" type="error">
                  {{error}}
                </v-alert>
                <v-form>
                  <v-text-field label="Email" name="login" prepend-icon="mdi-account-circle-outline" type="text" v-model="email" :rules="emailRules"></v-text-field>

                  <v-text-field id="password" label="Пароль" name="password" prepend-icon="mdi-lock-outline" type="password" v-model="password" :rules="paswordRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="black" dark @click="signin" :disabled="processing">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                valid: false,
                emailRules: [
                    (v) => !!v || 'Пожалуйста введите email',
                    (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный email'
                ],
                paswordRules:[
                  (v) => !!v || 'Пожалуйста введите пароль',
                  (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'

                ]
            }
        },
        computed:{
          error(){
            return this.$store.getters.getError
          },
          processing(){
            return this.$store.getters.getProcessing
          },
          isUserAuthentificated(){
            return this.$store.getters.isUserAuthentificated
          }
        },
        watch:{
          isUserAuthentificated(val){
            if(val === true){
              this.$router.push("/books")
            }
          }
        },
        methods: {
          signin(){
            this.$store.dispatch('SIGNIN',{ email: this.email, password: this.password })  
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>
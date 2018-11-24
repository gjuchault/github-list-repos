<template>
  <div id="app">
    <div v-if="!loggedIn">
      <a class="login" href="/login">Login with Github</a>
    </div>
    <div class="user" v-else>
      <Badge :picture="profile.photos[0].value" :name="profile.displayName" />
      <Repos :repos="repos" />
    </div>
    <Footer />
  </div>
</template>

<script>
import ky from 'ky'
import Badge from '@/components/Badge'
import Repos from '@/components/Repos'
import Footer from '@/components/Footer'

export default {
  name: 'app',

  components: {
    Badge,
    Repos,
    Footer
  },

  data: () => ({
    loggedIn: false,
    repos: [],
    profile: {}
  }),

  async mounted() {
    const json = await ky.get('/repos').json()
    
    if (json) {
      this.loggedIn = true
      this.repos = json.repos
      this.profile = json.profile
    }
  }
}
</script>

<style>
* { box-sizing: border-box; }

body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: #fafafa;
  font-family: Arial, sans-serif;
}

.login {
  border: 1px solid rgba(0,0,0,.2);
  height: 40px;
  border-radius: 3px;
  width: 200px;
  display: inline-block;
  line-height: 40px;
  position: relative;
  margin-top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  text-decoration: none;
  color: rgba(0,0,0,.9);
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}
</style>

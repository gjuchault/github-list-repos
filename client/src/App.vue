<template>
  <div id="app">
    <a href="/login">Login with Github</a>
  </div>
</template>

<script>
import ky from 'ky'

export default {
  name: 'app',

  async mounted() {
    const json = await ky.get('/repos').json()
    console.log(json)
  }
}
</script>

<style>
</style>

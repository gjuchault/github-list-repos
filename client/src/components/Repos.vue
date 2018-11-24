<template>
  <ul class="list">
    <li v-for="repo in repos">
      <a class="link" :href="repo.html_url">
        <h3>{{ repo.full_name }}</h3>
        <p class="desc">{{ repo.description }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Repos',

  props: {
    repos: Array
  }
}
</script>

<style scoped>
.list {
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
  border: 1px solid rgba(0,0,0,.3);
}

.list > li:not(:last-child) {
  border-bottom: 1px solid rgba(0,0,0,.3);
}

h3 {
  font-weight: 400;
}

h3, p {
  margin: 0;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 12px 16px;
}

a:hover {
  color: indianred;
  transition: color .2s ease;
}
</style>
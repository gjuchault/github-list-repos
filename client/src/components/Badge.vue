<template>
  <div class="badge">
    <div class="img">
      <img :src="picture" alt="profile-pic" height="100" width="100">
    </div>
    <h2 class="name">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Badge',

  props: {
    picture: String,
    name: String
  }
}
</script>

<style scoped>
.badge {
  display: flex;
}

.img {
  padding: 10px;
}

.name {
  font-weight: 400;  
}
</style>
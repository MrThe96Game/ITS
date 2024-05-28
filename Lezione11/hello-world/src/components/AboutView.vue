
<script>
export default {
  computed: {
    search: {
      get() {
        return this.$route.query.search ?? ''
      },
      set(search) {
        this.$router.replace({ query: { search } })
      }
    }
  }
}
</script>

<template>
  <h2>AboutView</h2>
  <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label>
</template>
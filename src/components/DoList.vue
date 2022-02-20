<template>
  <div>
    <label for="input">New Item</label>
    <input type="text" id="input" v-model="item">
    <input type="submit" id="submit" @click="addItem">
    <br><br>
    <ol>
      <li class="item" v-for="item in items" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "DoList",
  data() {
    return {
      item: "",
      items: []
    }
  },
  methods: {
    addItem() {
      this.items.push(this.item)
      this.item = ""
    }
  }
}
</script>

<style scoped>

</style>
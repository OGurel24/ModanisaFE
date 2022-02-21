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
import axios from "axios";

export default {
  name: "DoList",
  data() {
    return {
      item: "",
      items: []
    }
  },
  methods: {
    async addItem() {
      await axios.put("http://localhost:8081", this.item)
      this.item = ""
      await this.fetchData()
    },
    async fetchData() {
      let response = await axios.get("http://localhost:8081")
      this.items = response.data
    }
  },

  async beforeMount() {
    await this.fetchData()
  }
}
</script>

<style scoped>

</style>
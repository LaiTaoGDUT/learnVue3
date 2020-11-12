<template>
  <div class="searchDemo">
    <el-button
      style="margin: 0 10px 10px 0"
      type="primary"
      @click="createItem"
      >创建列表项</el-button
    >
    <div style="float: right">
      <el-input
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
        v-model="queryForm.key"
        clearable
        style="width: 300px"
      ></el-input>
      <el-button style="margin-left: 10px" type="primary" @click="searchItem"
        >搜索</el-button
      >
    </div>
  </div>
</template>

<script>
import listMock from '../mock/listMock';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: {
      type: String,
      default: 'yes!'
    }
  },
  data() {
    return {
      originList: [],
      showList: [],
    }
  },
  created() {
    this.originList = listMock;
  },
  methods: {
    createItem(item) {
      this.list.push(item);
    },
    searchItem(key) {
      this.showList = this.originList.filter(item => item.name.includes(key))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

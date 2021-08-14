<template>
  <el-row class="page-product">
    <el-col :span="19">
      <crumbs :keyword="keyword" />
      <category
        :areas="areas"
        :types="types" />
      <list :list="list" />
    </el-col>
    <el-col :span="5">
      <amap
        v-if="point.length"
        :height="290"
        :point="point"
        :width="230" />
    </el-col>
  </el-row>
</template>

<script>
import Crumbs from "@/components/products/crumbs.vue";
import Category from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
import Amap from "@/components/common/map.vue";

export default {
  name: "Products",
  components: {
    Crumbs,
    Category,
    List,
    Amap
  },
  async asyncData(ctx) {
    const keyword = ctx.query.keyword;
    const { status: status2, data: { areas, types } } = await ctx.$axios.get("/category/crumbs", {
      params: {
        city: "吉林市"
      }
    });
    if (status2 === 200) {
      return {
        keyword,
        areas: areas.filter(item => item.type !== "").slice(0, 5),
        types: types.filter(item => item.type !== "").slice(0, 5)
      };
    }
  },
  data() {
    return {
      list: [],
      types: [],
      areas: [],
      keyword: "",
      point: [123, 34]
    };
  }
};
</script>

<style scoped>

</style>

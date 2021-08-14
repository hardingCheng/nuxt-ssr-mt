<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        keyword="景点"
        kind="all">全部
      </dd>
      <dd
        :class="{active:kind==='part'}"
        keyword="美食"
        kind="part">约会聚餐
      </dd>
      <dd
        :class="{active:kind==='spa'}"
        keyword="丽人"
        kind="spa">丽人SPA
      </dd>
      <dd
        :class="{active:kind==='movie'}"
        keyword="电影"
        kind="movie">电影演出
      </dd>
      <dd
        :class="{active:kind==='travel'}"
        keyword="旅游"
        kind="travel">品质出游
      </dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item,index) in cur"
        :key="index">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Artistic",
  data() {
    return {
      kind: "all",
      list: {
        all: [{
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "118"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "118"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "118"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "118"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "118"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "120"
        }],
        part: [{
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "120"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "120"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "120"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "120"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "120"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }],
        spa: [{
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }, {
          img: "https://img.meituan.net/phoenix/2ea880c128ece8b78e615d6961a43e3a317593.jpg@740w_416h_1e_1c",
          title: "【青涵美宿】馥芮白/可观天津之眼/100寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
          pos: "整套1居室·可住2人长虹公园/天津西站",
          price: "1231"
        }],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    cur() {
      return this.list[this.kind];
    }
  },
  methods: {
    over(e) {
      const dom = e.target;
      const tag = dom.tagName.toLowerCase();
      if (tag === "dd") {
        this.kind = dom.getAttribute("kind");
        // const keyword = dom.getAttribute("keyword");
        // const { status, data: { count, pois } } = await self.$axios.get("/search/resultsByKeywords", {
        //   params: {
        //     keyword,
        //     city: self.$store.state.geo.position.city
        //   }
        // });
        // if (status === 200 && count > 0) {
        //   const r = pois.filter(item => item.photos.length).map(item => {
        //     return {
        //       title: item.name,
        //       pos: item.type.split(";")[0],
        //       price: item.biz_ext.cost || "暂无",
        //       img: item.photos[0].url,
        //       url: "//abc.com"
        //     };
        //   });
        //   self.list[self.kind] = r.slice(0, 9);
        // } else {
        //   self.list[self.kind] = [];
        // }
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>


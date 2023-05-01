<template>
  <div class="lunbo">
    <el-row>
      <el-col :span="24" class="lunbo-col">
        <div class="swiper grid-content bg-purple-dark">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.id">
              <img :src="item.path" width="100%" alt="" />
            </div>
          </div>
          <div class="swiper-pagination"></div><!--分页器。如果放置在swiper外面，需要自定义样式。-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "lunbo",

  data() {
    return {
      list: [
        {
          id: "1",
          path: require('../../assets/banner2.png'),
        },
        {
          id: "2",
          path: require('../../assets/banner3.png'),
        },
        {
          id: "3",
          path: require('../../assets/banner1.png'),
        },
      ],
    };
  },

  mounted() {
    // eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper(".swiper", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // type:'progressbar',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  },

  methods: {},
};
</script>



<style lang="less" scoped>
.swiper {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #none;
  /* 两种都可以 */

}

.lunbo {
  width: 100%;
  height: 600px;

  .el-row {
    width: 94%;
    margin: auto;
    padding-top: 10px;

    .lunbo-col {
      width: 100%;
      overflow: hidden;

      /deep/.swiper-pagination-bullet {
        height: 20px;
        width: 20px;
        border: 2px solid #fff;
        color: #fff;
      }
    }
  }

}
</style>
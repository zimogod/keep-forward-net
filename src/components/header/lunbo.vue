<template>
  <div class="lunbo">
    <el-row>
      <el-col :span="24" class="lunbo-col">
        <div class="block">
          <el-carousel trigger="click" height="574px">
            <el-carousel-item v-for="item in list" :key="item.id">
              <img :src="item.path" width="100%" alt="" />
            </el-carousel-item>
          </el-carousel>
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
          path: require('../../assets/banner2.jpg'),
        },
        {
          id: "2",
          path: require('../../assets/banner3.jpg'),
        },
        {
          id: "3",
          path: require('../../assets/banner1.jpg'),
        },
      ],
    };
  },

  mounted() {

  },

  methods: {},
};
</script>

<style>
.el-carousel__indicators {
  text-align: center !important;
}
</style>
<style lang="less" scoped>
.lunbo {
  width: 100%;
  height: 600px;
  cursor: pointer;

  .el-row {
    width: 94%;
    margin: auto;
    padding-top: 10px;

    .lunbo-col {
      width: 100%;
      overflow: hidden;
    }
  }

}
</style>
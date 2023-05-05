<template>
  <!-- 头部导航 -->
  <div class="navs">
    <el-row ref="navlist">
      <el-col :span="22" :offset="1">
        <div class="grid-content bg-purple-dark">
          <div class="navs_container">
            <ul>
              <li v-for="item in navslist" :key="item.id" class="navs_content">
                <span>
                  <!-- <a href="#">{{ item.uname }}</a> -->
                  <router-link :to="item.url">{{ item.name }}</router-link>
                </span>
                <div class="navs_content_1" v-if="item.children">
                  <ul>
                    <li v-for="items in item.children" :key="items.id">
                      <!-- <a :href="items.path">{{ items.uname }}</a> -->
                      <router-link :to="items.url">{{ items.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "navs",
  components: {
  },
  data() {
    return {
      navslist: [
        { name: "知进教育", url: "/index", children: [] },
        { name: "学校简介", url: "/school", children: [] },
        {
          name: "学院介绍", url: "/specialty", children: [
            { name: "计算机学院", url: "/basics" },
            { name: "物联网学院", url: "/web" },
            { name: "智能学院", url: "/bigdata" },
            // { name: "网络运营学院", url: "/operation" },
          ]
        },
        { name: "教育教学", url: "/education", children: [] },
        { name: "就业服务", url: "/employment", children: [] },
        { name: "校园环境", url: "/surroundings", children: [] },
        { name: "招生计划", url: "/plan", children: [] }
      ],
      currentScroll: 0,
      // 头部导航
      list: [],
    };
  },

  mounted() {
    this.handleScrollbox();
    window.addEventListener("scroll", this.handleScrollbox, true);
    // 读取头部导航路由赋值给 list
    this.list = this.$router.options.routes.slice(1, 9);
  },

  methods: {
    handleScrollbox() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      // console.log(this.currentScroll);
      this.$nextTick(() => {
        // console.log(this.$refs);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.navs {
  width: 100%;
  background-color: #0580fb;

  .navs_container {
    height: 51px;
    line-height: 51px;
    text-align: center;

    ul {
      display: flex;

      .navs_content:hover span {
        background-color: #51a6fa;
      }

      // 当前路由高亮显示
      .router-link-active {
        background-color: #51a6fa;
      }

      .navs_content:hover .navs_content_1 ul {
        opacity: 1;
        top: 50px;
        z-index: 999;
      }

      .navs_content {
        flex-grow: 1;
        cursor: pointer;
        position: relative;

        span {
          font-size: 18px;
          display: block;
          width: 100%;
          height: 51px;
          transition: all 0.5s linear;
          overflow: hidden;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            font-size: 18px;
            color: #fff;
          }
        }

        .navs_content_1 {
          width: 100%;

          ul {
            width: 100%;
            position: absolute;
            left: 0;
            top: 60px;
            text-align: center;
            flex-direction: column;
            background-color: #fff;
            transition: all 0.4s linear;
            opacity: 0;

            li:hover {
              background-color: #0580fb;
              color: #fff;
            }

            li {
              overflow: hidden;
              width: 100%;
              height: 50px;
              font-size: 14px;
              border-bottom: 1px dashed #ccc;

              a {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 14px;
                color: #000;
              }

              a:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
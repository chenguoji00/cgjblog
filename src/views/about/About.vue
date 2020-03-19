<template>
  <div class="about">
    <transition
            name="slide-fade"
    >
      我是关于页面
      <div class="content" v-if="show">
        <h3>基础信息</h3>
        <div class="box-showdown">
          <div class="box-t">
            <img
              src="../../assets/logo.png"
              width="150px"
              height="150px"
              alt=""
            />
            <p>
              博学之，审问之，慎思之，明辨之，笃行之 ,<br />我叫陈国基,一年半前端开发经验
            </p>
          </div>

          <div class="box-bottom">
            <div class="box-bottom-show">
              <div class="box-bottom-show-t">
                <img
                  src="../../assets/logo.png"
                  width="50px"
                  height="50px"
                  alt=""
                />
              </div>
              <span>年龄/25</span>
            </div>

            <div class="box-bottom-show">
              <div class="box-bottom-show-t">
                <img
                  src="../../assets/logo.png"
                  width="50px"
                  height="50px"
                  alt=""
                />
              </div>
              <span>状态/离职</span>
            </div>

            <div class="box-bottom-show">
              <div class="box-bottom-show-t">
                <img
                  src="../../assets/logo.png"
                  width="50px"
                  height="50px"
                  alt=""
                />
              </div>
              <span>学历/本科</span>
            </div>

            <div class="box-bottom-show">
              <div class="box-bottom-show-t">
                  <img
                    src="../../assets/logo.png"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </div>
                <span>坐标/东莞</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      show: false,
      show11: true
    };
  },
  methods: {
    timeout() {
      setTimeout(() => {
        this.show = true;
      }, 1000);
    }
  },
  mounted() {
    this.timeout();
  }
};
</script>

<style lang="sass" scoped>
.slide-fade-enter-active
  transition: all .9s ease

.slide-fade-leave-active
  transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(20px)
  opacity: 0
.content
    width: 800px
    border: 1px solid #666666
    margin: 100px auto
    height: 400px
    background-color: #F8F8F6
    border-radius: 12px
    overflow: hidden
    h3
        line-height: 50px
        text-align: center
        font-size: 20px
        background-color: #fff
    .box-t
        width: 600px
        margin: 0 auto
        height: 200px
        overflow: hidden
        img
            float: left
            margin-right: 30px
        p
            float: left
            margin-top: 50px
    .box-bottom
        width: 600px
        margin: 0 auto
        height: 80px
        display: flex
        justify-content: center
        align-items: center
        div
            flex: 1
        .box-bottom-show
            width: 80px
            text-align: center
            margin: 0 auto
            .box-bottom-show-t
                height: 80px
                width: 80px
                background-color: #9AB1B7
                border-radius: 100%
                position: relative
                overflow: hidden
                img
                    margin-top: 15px
                    transition: all 1s
            &:hover img
                transform: scale(1.5,1.5)

            span
                display: inline-block
                margin-top: 10px
                margin-right: 70px
</style>

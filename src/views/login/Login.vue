<template>
  <div class="log" :style="contentStyleObj">
    <div class="login-container">
      <el-form
        label-position="right"
        :model="ruleForm2"
        :rules="rules"
        ref="ruleForm2"
        label-width="70px"
        class="demo-ruleForm"
      >
        <h3 class="title">登录</h3>
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm2.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm2.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            style="width:100%;"
            @click="handleSubmit"
            :loading="logining"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" class="rememberme"
            >记住密码</el-checkbox
          >
          <el-button type="text" @click="forgetpassword">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "network/api";
export default {
  name: "Login",
  data() {
    return {
      contentStyleObj: {
        height: ""
      },
      logining: false,
      ruleForm2: {
        username: "",
        password: ""
      },
      rules: {
        password: [
          { required: true, message: "密码不允许为空！！！", trigger: "change" }
        ],
        username: [
          {
            required: true,
            message: "用户名不允许为空！！！",
            trigger: "change"
          }
        ]
      },
      checked: true
    };
  },
  created() {
    this.contentStyleObj.height = window.innerHeight - 100 + "px";
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit(ev) {
      this.$refs["ruleForm2"].validate(valid => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            user: this.ruleForm2.username,
            pwd: this.ruleForm2.password,
            company: "tpl"
          };
          login(loginParams) //请求登录接口
            .then(res => {
              console.log(res,"this is res")
              if (res.errid == 0) {
                setTimeout(() => {
                  this.logining = false;
                  this.$store.commit("updateIsLogin",true)
                  this.$store.commit("inuser",res)
                  localStorage.setItem("Flag", "isLogin");
                  localStorage.setItem("isLogin", true);
                  localStorage.setItem("user_key", res.user_key);
                  localStorage.setItem("company_key", res.company_key);
                  localStorage.setItem("user_name", res.user_name);
                  localStorage.setItem("token", res.token);
                  localStorage.setItem("short_name", res.short_name);
                  this.$message({
                    message: "恭喜你，这是一条成功消息",
                    type: "success"
                  });
                }, 500);
                this.$router.replace({ path: "/Home" });
              } else {
                this.logining = false;
                this.$message({
                  message: "警告哦，这是一条警告消息",
                  type: "warning"
                });
                return;
              }
            })
            .catch(err => {
              console.log("login error", err);
              return false;
            });
        } else {
          return false; //验证错误
        }
      });
    },
    forgetpassword() {
      this.$alert("请联系管理员找回密码，管理员电话：156xxxxxxxx", "提示", {
        confirmButtonText: "确定",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
.title {
  text-align: center;
  padding-bottom: 15px;
}
.log {
  width: 100%;
  height: 100%;
  padding-top: -20px;
  position: relative;
  background: #1c1c76
    url("https://gtms01.alicdn.com/tps/i1/TB1GTCYLXXXXXcHXpXXcoeQ2VXX-2500-600.jpg")
    no-repeat center;
}
.login-container {
  height: 300px;
  width: 300px;
  padding: 30px;
  background-color: #e9e9f2;
  position: absolute;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  top: 50%;
  border-radius: 20px;
  transform: translate(-20%, -50%);
  right: 0;
  border: 1px solid #666;
}
.w {
  width: 1000px;
  margin: 0 auto;
}
.rememberme {
  padding: 0 15px;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
label.el-button.forget {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
}
</style>

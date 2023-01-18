<template>
  <div class="navbar">
  </div>
  <div class="main">
    <input id="chk" aria-hidden="true" type="checkbox">

    <div class="signup">
      <form @submit.prevent="registerfunction">
        <label aria-hidden="true" for="chk">Sign up</label>
        <input v-model="mailregister" name="txt" placeholder="Mail" required type="text">
        <input v-model="passwordregister" name="pswd" placeholder="Password" required type="password">
        <button type="submit">Sign up</button>
      </form>
    </div>

    <div class="login">
      <form @submit.prevent="loginfunction">
        <label aria-hidden="true" for="chk">Login</label>
        <input v-model="maillogin" name="username" placeholder="Mail" required type="text">
        <input v-model="passwordlogin" name="password" placeholder="Password" required type="password">
        <button type="submit">Login</button>
      </form>
    </div>
  </div>

</template>

<script>
export let data
export default {
  name: "LoginPage",
  data() {
    return {
      maillogin: '',
      passwordlogin: '',
      errorlogin: '',
      tokenlogin: '',
      mailregister: '',
      passwordregister: '',
      errorregister: '',


    }
  },
  methods: {
    async loginfunction() {
      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify({"mail": this.maillogin, "password": this.passwordlogin}),

      };
      const response = await fetch("http://localhost:3000/login", requestOptions);
      const data = await response.json();
      if (data.code == 401) {
        this.errorlogin = 'Mail or Password invalid try again'
      } else {
        this.errorlogin = ''
        localStorage.setItem('token', data.Result)
        localStorage.setItem('mail', this.maillogin)
        console.log(localStorage)
        this.$router.push('/home')

      }
    },


    async registerfunction() {
      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify({
          "mail": this.mailregister,
          "password": this.passwordregister
        })
      };
      console.log(requestOptions)
      const response = await fetch("http://localhost:3000/register", requestOptions);
      const data = await response.json
      console.log(data)
    }
  }
}

</script>

<style scoped>
.home {
  text-decoration: none;
}


html {
  background-color: #8BC6EC;
  background-image: linear-gradient(10000deg, #8BC6EC 0%, #9599E2 100%);
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: flex-start;
  align-content: center;
  min-height: 100vh;
  font-family: 'cursive', sans-serif;
}

.main {
  width: 350px;
  height: 500px;
  background: linear-gradient(10000deg, #8BC6EC 0%, #9599E2 100%);
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
  font-family: cursive;
  margin-left: 37%;
  margin-top: 5%;

}

#chk {
  display: none;
}

.signup {
  position: relative;
  width: 100%;
  height: 100%;
}

label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}

input {
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: .2s ease-in;
  cursor: pointer;
}

button:hover {
  background: #6d44b8;
}

.login {
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: .8s ease-in-out;
}

.login label {
  color: #573b8a;
  transform: scale(.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}

#chk:checked ~ .login label {
  transform: scale(1);
}

#chk:checked ~ .signup label {
  transform: scale(.6);
}

</style>

<template>
<div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button class="login-btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  ata() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // alert(`Username: ${this.username}\nPassword: ${this.password}`);
      
      if(this.username === "testuser" && this.password === "testpassword"){
        alert(`Login Success`);
        this.username = ""
        this.password = ""
      }else {
        
      }
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
.normal {
  font-weight: normal;
}

.login {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}


.divide {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
}

</style>

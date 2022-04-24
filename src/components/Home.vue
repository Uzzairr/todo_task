<template>
  <div class="hello">
    <h1>Welcome To The Todo List</h1>

    <button type="button" class="btn third" @click.prevent="goToLogin">Log In!</button>
    <button type="button" class="btn third" @click.prevent="goToRegister">Register!</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    // for redirection on login or register page
      goToLogin(){
          this.$router.push({path: '/Login'})
      },
       goToRegister(){
          this.$router.push({path: '/Register'})
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





/* 
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #2c3e50;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
} */
/* 
body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center;
} */


@media screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }
}

.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  /* display: flex; */
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: rgb(0, 0, 0);
  outline: 0;
}
.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}
</style>

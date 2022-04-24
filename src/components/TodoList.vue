<template>
<div class="form-style-6">
<h1>TODO Screen</h1>
<button class="btn third" @click="createTodo">Create New Todo</button>
<input type="text" v-model="search" placeholder="Search By Title" />
<button class="btn third" @click="searchData">Search</button>
<button class="btn third" @click="clear">Clear</button>
<table  class="form-style-6" style="background-color:#FFFFE0;">
  <tr>
      <th>Title</th>
    <th>View</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
  <tr v-for="data in todo_data" :key="data.id">
    <td>{{data.title}}</td>
    <td><button @click="viewRecord(data.id)">View</button></td>
    <td><button @click="updateRecord(data.id)">Update</button></td>
    <td><button @click="deleteRecord(data.id)">Delete</button></td>
  </tr>
</table>
<button class="btn third" @click="logout">Log Out</button>

</div>
</template>
<script>
import Todo from '../services/todo-service';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'TodoList',
  props: {
    msg: String
  },
    data() {
    return {
      search: "",
      email: "",
      password: "",
      todo_data: "",
    }
  },
    mounted() {
        this.fetchTodo();
  },
  methods: {
    async fetchTodo(){
         let response = await Todo.getTodoList();
         console.log(response.data.items.data)
       this.todo_data = response.data.items.data;
      },
      searchData(){
           let search = this.search
           // this is for searching the required data.
        let newArray =  this.todo_data.filter(function (el) {
        let data = el.title.toLowerCase().includes(search.toLowerCase());
        return data;
      });
      this.todo_data = newArray;
      },
      clear(){
          // it can clear the search input field and fetch the todo list data again
          this.search = "";
          this.fetchTodo();
      },
    async deleteRecord(id){
        // for the deletion of the record
      let response = await Todo.deleteTodoList(id);
        if(response.status == '200'){
           this.fetchTodo();
        }
     },
     // for removing data from the local storage on clicking on logout
    logout(){
        localStorage.removeItem("uid");
        localStorage.removeItem("authorization");
         this.$router.push("/")
      },
     createTodo(){
       this.$router.push({path: '/CreateTodoList'})
        },
     viewRecord(id){
       this.$router.push("/ViewTodo?viewId="+ id)
        },
     updateRecord(id){
       this.$router.push("/UpdateTodo?updateId="+ id)
        }
      }
      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border:1px solid rgb(245, 239, 239);

}
.form-style-6{
	font: 95% Arial, Helvetica, sans-serif;
	max-width: 550px;
	margin: 10px auto;
	padding: 16px;
	background: black;
}
.form-style-6 h1{
	background: #3498db;
	padding: 20px 0;
	font-size: 140%;
	font-weight: 300;
	text-align: center;
	color: #fff;
	margin: -16px -16px 16px -16px;
}
.form-style-6 input[type="text"],
.form-style-6 input[type="password"],
.form-style-6 input[type="date"],
.form-style-6 input[type="datetime"],
.form-style-6 input[type="email"],
.form-style-6 input[type="number"],
.form-style-6 input[type="search"],
.form-style-6 input[type="time"],
.form-style-6 input[type="url"],
.form-style-6 textarea,
.form-style-6 select 
{
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;
	outline: none;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	background: #fff;
	margin-bottom: 4%;
	border: 1px solid #ccc;
	padding: 3%;
	color: #555;
	font: 95% Arial, Helvetica, sans-serif;
}
.form-style-6 input[type="text"]:focus,
.form-style-6 input[type="date"]:focus,
.form-style-6 input[type="datetime"]:focus,
.form-style-6 input[type="email"]:focus,
.form-style-6 input[type="number"]:focus,
.form-style-6 input[type="search"]:focus,
.form-style-6 input[type="time"]:focus,
.form-style-6 input[type="url"]:focus,
.form-style-6 textarea:focus,
.form-style-6 select:focus
{
	box-shadow: 0 0 5px #3498db;
	padding: 3%;
	border: 1px solid #3498db;
}

.form-style-6 input[type="submit"],
.form-style-6 input[type="button"]{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	padding: 3%;
	background: #3498db;
	border-bottom: 2px solid #3498db;
	border-top-style: none;
	border-right-style: none;
	border-left-style: none;	
	color: #fff;
}
.form-style-6 input[type="submit"]:hover,
.form-style-6 input[type="button"]:hover{
	background: #3498db;
}


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
  color: rgb(255, 255, 255);
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

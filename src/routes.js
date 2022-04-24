import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import TodoList from './components/TodoList.vue';
import CreateTodoList from "./components/CreateTodoList.vue";
import ViewTodo from "./components/ViewTodo.vue";
import UpdateTodo from "./components/UpdateTodo.vue"

const routes = [
    {
        name: 'Home',
        path:'/',
        component: Home

    },
    {
        name: 'Login',
        path:'/login',
        component: Login

    },
    {
        name: 'Register',
        path:'/register',
        component: Register

    },
    {
        name: 'TodoList',
        path:'/todolist',
        component: TodoList

    },
    {
        name: 'CreateTodoList',
        path:'/createtodolist',
        component: CreateTodoList

    },
    {
        name: 'ViewTodo',
        path:'/viewtodo',
        component: ViewTodo

    },
    {
        name: 'UpdateTodo',
        path:'/updatetodo',
        component: UpdateTodo

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
})
export default router;
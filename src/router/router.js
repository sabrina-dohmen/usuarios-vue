import { createRouter, createWebHistory } from 'vue-router'
import TablaUsuarios from '../components/TablaUsuarios.vue';
import NuevoUsuario from '../components/NuevoUsuario.vue';
import EditarUsuario from '../components/EditarUsuario.vue';

const routes = [
  { path: '/', name: 'TablaUsuarios', component: TablaUsuarios },
  { path: '/nuevo', name: 'NuevoUsuario', component: NuevoUsuario },
  { path: '/editar/:id', name: 'EditarUsuario', component: EditarUsuario },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

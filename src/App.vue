<template>
  <div>
    <h3> Proyecto Usuarios </h3>
  </div>
  <router-view />
</template>

<script>
  import TablaUsuarios from '@/components/TablaUsuarios.vue';

  export default {
    name: 'App',
    components: {
      TablaUsuarios
    },
  }
</script>

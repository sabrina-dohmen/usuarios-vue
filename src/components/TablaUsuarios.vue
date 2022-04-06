<template>
    <div>
        <router-link :to="{name:'NuevoUsuario'}">
            <button> Nuevo usuario </button>
        </router-link> 
        <br>
        <br> 
        <table>
            <tr>
                <th> ID </th>
                <th> Nombre</th>
                <th> Email</th>
                <th> </th>
            </tr>
            <tr v-for="usuario in usuarios" :key="usuario.id">
               <td> {{usuario.id}} </td>
               <td> {{usuario.nombre}}</td>
               <td> {{usuario.email}}</td>
               <td>
                    <router-link :to="{name:'EditarUsuario', params:{id:usuario.id}}">
                        <button> Editar </button>
                    </router-link>
                    <button style="margin-left: 3px" v-on:click="deleteUsuario(usuario.id)"> Eliminar </button>
                </td>
                
            </tr>
        </table>
        
    </div>
</template>

<script>
import NuevoUsuario from '@/components/NuevoUsuario.vue';
import EditarUsuario from '@/components/EditarUsuario.vue';
import axios from 'axios';

export default {
    name: 'TablaUsuarios',
    components: {
        NuevoUsuario,
        EditarUsuario,
    },
    data() {
        return {
            usuarios: []
        };
    },
    methods: {
        async getAllUsuarios() {
            try {
                let getAllJson = await axios.get("http://localhost:9393/usuario");
                this.usuarios = getAllJson.data;
            } catch (error) {
                console.error('Error al obtener los datos: ' + error);
            }   
        },

        async deleteUsuario(id) {
            try {
                let deleteJson = await axios.delete(`http://localhost:9393/usuario/${id}`)
                .then(res => console.log('Usuario eliminado!'));
                this.getAllUsuarios();
            } catch (error) {
                console.error('Error al obtener los datos: ' + error);
            }   
        },

    },

    mounted() {
        this.getAllUsuarios();
    }
}
</script>

<style>
    table, td {
        border: 1px solid grey;
        border-collapse: collapse;
        padding: 3px;        
    }
    td {
        cursor: pointer;
    }
    th {
        background-color: grey;
        border: 1px solid;      
        border-collapse: collapse;
        padding: 3px;
    }
</style>
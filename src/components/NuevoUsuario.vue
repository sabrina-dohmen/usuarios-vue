<template>
    <div>
        <form action="">
            <label for="nombre">
                <span> Ingresar Nombre </span> <br>
                <input type="text" id="nombre" placeholder="Nombre..."  v-model="this.input.nombre" > <br> <br>
            </label> 
            <label for="email">
                <span> Ingresar Email </span> <br>
                <input type="text" id="email" placeholder="Email..." v-model="this.input.email" > <br> <br>
            </label>
        </form>
        <button v-on:click="saveUsuario()"> Guardar </button>
        <br>
        <br>
        <router-link :to="{name:'TablaUsuarios'}">
            <button> Volver </button>
        </router-link>
        <br>
        <br>
        <p>{{ this.input }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Usuario',
    data() {
        return {
            usuario: [],
            id: '',
            input: {
                nombre: '',
                email: ''
            },
        };
    },
    methods: {
        // async getUsuario(){
        //     let url = window.location.href;
        //     this.id = url.replace('http://localhost:9393/usuario/', '');
        //     console.log(this.id);
        //     try {
        //         let getJson = await axios.get(`http://localhost:9393/usuario/${id}`);
        //         this.usuario = getJson.data;
        //         console.log(this.usuario);
        //     } catch (error) {
        //         console.error('Error al obtener los datos: ' + error);
        //     }  
        // },
        async saveUsuario(){
            try {                
                // let nuevoUsuario =  {nombre: "ejemplo", email: "ejemplo@email.com"};
                let postJson = await axios.post( 'http://localhost:9393/usuario', this.input)
                    .then(res => console.log('Nuevo Usuario Creado!'));
            } catch (error) {
                console.error('Error al guardar los datos: ' + error);
            }
        },
    },

    mounted(){
        // this.getUsuario();
    }
}
</script>>
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
        <button v-on:click="updateUsuario()"> Actualizar </button>
        <br>
        <br>
        <router-link :to="{name:'TablaUsuarios'}">
            <button> Volver </button>
        </router-link>
        <br>
        <br>
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
        async getUsuario(){
            let url = window.location.href;
            this.id = url.replace('http://localhost:8080/editar/', '');
            try {
                let getJson = await axios.get(`http://localhost:9393/usuario/${this.id}`);
                this.usuario = getJson.data;

                this.input.nombre = this.usuario[0].nombre;
                this.input.email = this.usuario[0].email;
            } catch (error) {
                console.error('Error al obtener los datos: ' + error);
            }  
        },

        async updateUsuario(){
            try {                
                // let nuevoUsuario =  {nombre: "ejemplo", email: "ejemplo@email.com"};
                let putJson = await axios.put( `http://localhost:9393/usuario/${this.id}`, this.input)
                    .then(res => console.log('Usuario actualizado!'));
            } catch (error) {
                console.error('Error al guardar los datos: ' + error);
            }
        },
    },

    mounted(){
        this.getUsuario();
    }
}
</script>>
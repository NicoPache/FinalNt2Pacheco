<template>
  <section class="src-components-turno-form">
   <h1>final</h1>
    <input type="text" v-model="texto">
   <h1>cantidad:{{getTexto.length}}</h1>
   <h1>{{getTexto | codificado}} (codificado)</h1> 
   <h1>{{getTexto | mayusculas }}(Mayuscula)</h1>
   <h1>{{getTexto|minuscula}}(Minuscula)</h1>
   <h1>{{getTexto|mayMin}}(Mayuscula/Minuscula)</h1>
   <h1>{{getTexto|minMay}}(Minuscula/Mayuscula)</h1>
   <br>
<p>Respuestas</p>
   <p>1: B</p>
   <p>2: B</p>
   <p>3: C</p>
   <p>4: B</p>
   <p>5:B,C</p>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-turno-form',
    props: [],
    
    mounted () {
       
    },
    data () {
      return {
      texto:""
        
      }
    },
    
    methods: {
 enviar(){
        }
        },
      

    
    computed: {
     getTexto(){
       return this.texto
     }

    }
}
</script>

<style scoped lang="css">
.src-components-turno-form {
}
</style>

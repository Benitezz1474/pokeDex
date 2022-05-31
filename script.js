

//Creo una funcion para crear pokemons utilizando la API pokeide

const btn = document.getElementById("btn");

 function buscarPokemon(){

   // Variables o Constantes a utilizar

    let scanner = document.querySelector(".scanner");

    let spiner = document.querySelector(".spiner");

    let sprite = document.querySelector(".sprite");

    //cada vez que se ejecute la funcion, el sprite (donde aparece la imagen del pokemon o AOK)
    // debe quedar limpio, para no arrastrar o acumular spiners o imagenes y tambien por si llegase a ocurrir algo inesperado;

    sprite.innerHTML = "";


    //al Ejecutarse esta funcion, lo primero que hace es mostrar un spiner de carga y al finalizar la funcion lo quitamos

    spiner.style.display = "block";

    //consumimos la API

    let pokeName = document.getElementById("pokeName").value

    let pokeData = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;


     fetch(pokeData)

     .then((data => data.json()))
     .then(data => {

       //Pintar datos en pantalla o mostrar datos por pantalla (en la pokedex);

       scanner.innerHTML = ""
        sprite.innerHTML = "";

        //el sprite mostrará una imagen png y el scanner mostrará las habilidades del pokemon;  

        sprite.innerHTML = `<img src = ${data.sprites.front_default} >`;

        scanner.innerHTML = `<div> 
        <h3>Ability</h3>
         <li> Habilidad 1: ${data.abilities[0].ability.name}</li>
         <li> Habilidad 2: ${data.abilities[1].ability.name}</li>
         

        </div>`;
     })

     //en caso de que algo salga mal, el profesor AOK es pintado en pantalla (en el sprite);

     .catch(()=>{
      sprite.innerHTML = `<img src="./IMGs/profesor OAK.png" >`;

     })

     //Quto el spinner de carga al finalizar la promesa;

     .finally(()=>spiner.style.display = "none");
}

//el boton A de la pokedex ejecutará la funcion buscarPokemon

btn.addEventListener("click",buscarPokemon);
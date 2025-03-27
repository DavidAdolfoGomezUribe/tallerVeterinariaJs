// # Taller veterinaria - JavaScript

// Implementar una aplicación en **JavaScript** que permita gestionar una veterinaria.

// ### **Requisitos:**

// 1. Las mascotas deben tener almenos las siguientes propiedades:
//     - Nombre
//     - Especie (Perro, Gato, etc.)
//     - Edad
//     - Peso
//     - Estado de salud (Sano, Enfermo, En tratamiento)
// 2. **Implementar un menú interactivo con `prompt` y `alert`** que permita al usuario:
//     1. Registrar una nueva mascota.
//     2. Listar todas las mascotas registradas.
//     3. Buscar una mascota por nombre.
//     4. Actualizar el estado de salud de una mascota.
//     5. Eliminar una mascota por nombre.
//     6. Salir del programa.

console.log("All ok")

document.addEventListener("DOMContentLoaded", ()=>{

    const register = document.querySelector(".register")
    const list = document.querySelector(".list")
    const search = document.querySelector(".search")
    const estadodesalud = document.querySelector(".estadodesalud")
    const deleteByName = document.querySelector(".deleteByName")
    const close = document.querySelector(".close")

    let allAnimals = []

    alert("Bienvenido al registro de animales, por favor lea las opciones y llene correctamente los campos")


    
    //1
    register.addEventListener("click",()=>{
        //object
        let Animals = {}
        console.log(allAnimals)
        alert("Por favor registre los datos del animal")
        console.log("register was clicket")

        let name = prompt("Ingrese el nombre n/")
        Animals.nombre = name
        
        let spcies = prompt("Ingrese la especie")
        Animals.especie = spcies

        let age = prompt(`Ingrese la edad de ${name}` )
        Animals.edad = age

        let weight = prompt(`Ingrese el peso de ${name}`)
        Animals.peso = weight

        let health = prompt(`Ingrese el estadode salud de ${name}`)
        Animals.estadodesalud = health

        allAnimals.push(Animals)
        
        function response() {
            setTimeout(function serverResponse() {
                alert(name + " fue registrado correctamente en nuestra base de datos")
            },2500)
        }

        response()

        return allAnimals
    })


    //2 listar
    list.addEventListener("click",()=>{
        console.log("list was clicket");
        alert(JSON.stringify(allAnimals,null,4))
        console.log(allAnimals)
    })
    
    //3 search

    search.addEventListener("click",()=>{

        let searchName = prompt(`Ingrese el nombre`)
        let result = allAnimals.filter(element => {
            return element.nombre === searchName ;
    
        })

        function response() {
            setTimeout(function serverResponse() {
                alert(JSON.stringify(result,null,4)  + "")
            },2500)
        }

        response()
    console.log(result)
    })

    //4 update
    estadodesalud.addEventListener("click", ()=>{
    try {
        let searchName = prompt(`Ingrese el nombre`)
            let result = allAnimals.filter(element => {
            
                return element.nombre === searchName ;
            })
            
            let newEstadoDeSalud = prompt("Ingrese el nuevo estado de salud")
            result[0].estadodesalud = newEstadoDeSalud

            function response() {
                setTimeout(function serverResponse() {
                    alert(JSON.stringify(result,null,4)  + "")
                },2500)
            }
    
            response()
            
            console.log(result)

    } catch (error) {
        console.log("No hay coicidencias")   
    }
        
    })

    //5 delete

    deleteByName.addEventListener("click",()=>{
        try {
            let searchName = prompt(`Ingrese el nombre`)
            allAnimals = allAnimals.filter(element => {
                
            return element.nombre !== searchName ;
            })
            
            console.log(allAnimals)
                
                
                
        } catch (error) {
            console.log("No hay coicidencias")   
        }
            
            
        
    })
    //6 exit 

   


    function guardarDatos(datos,callback){
        setTimeout(function(){
            console.log("la base de datos ha sido actualizada " + datos)
        },1000)
        callback(datos)
    }
    
    function cerrandoServidor(datos,callback){
        setTimeout(function(){
            console.log("cerrando conexion con el servidor " + datos)
        },2000)
        callback()
    }


         
    close.addEventListener("click",()=>{
        allAnimals = {}


        guardarDatos("200",function(marca){
            cerrandoServidor(marca,function () {
                setTimeout(function () { 
                    console.log("all ok")
                    alert("200")
                    alert("Saliendo del programa")
                    window.close()
            },1000)
              })  
          })


        console.log(allAnimals)
        console.log("Saliendo del programa")
    })





})
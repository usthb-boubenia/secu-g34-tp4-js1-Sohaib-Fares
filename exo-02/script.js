"use strict"

//Exo: 02

//const: slide 51/37
//console.log() slide 33
//functions: slide 45


function f1(){

    //Array of strings, slide: 38
    const strudents = ["Etudiant1", "Etudiant2", "Etudiant3"];

    //for..of loop, slide: 44
    for (const strudent of strudents ){
        console.log(strudent);
    }
}

function f2(){
    
    //Object, slide: 39
    const strudent = {
        nom: "John",
        prenom: "Doe",
        age: 30
    };
    console.log(strudent);
}

function f3(){
    //Table of objects, slide: 40
    const strudents = [
        { nom: "name1", prenom: "surname1", age: 21 },
        { nom: "name2", prenom: "surname2", age: 22 },
        { nom: "name3", prenom: "surname3", age: 23 }
    ];

    //for..of loop, slide: 44
    for (const strudent of strudents){
        console.log(strudent);
    }
}
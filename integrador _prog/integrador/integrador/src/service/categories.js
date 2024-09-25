//================CATEGORIA=================

import { categoriaActiva } from "../../main";
import { handleRenderList } from "../views/store";
import {handleGetProductLocalStorage} from "../persistence/localStorage";

const handleFilterProductsByCategory=(categoriaIn)=>{
    const products= handleGetProductLocalStorage()
    console.log('Categoría seleccionada:', categoriaIn); 
    console.log('Productos:', products);
    switch(categoriaIn){
        case categoriaActiva:
            console.log('Mostrando todos los productos');
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas fritas":
        case "Gaseosas":
            const result= products.filter((el)=> el.categories === categoriaIn)
            handleRenderList(result);
            break;
        case "Mayor precio":
            const resultPrecioMayor= products.sort((a, b)=> b.price - a.price)
            handleRenderList(resultPrecioMayor);
            break;
        case "Menor precio":
            const resultPrecioMenor= products.sort((a, b)=> a.price - b.price)
            handleRenderList(resultPrecioMenor);
            break;
        default:
            console.log(`Categoría ${categoriaIn} no reconocida`);
            break;
    }
}

/*render de la vista categorias*/ 
export const renderCategories=()=>{
    const ullist= document.getElementById("listFilter");
    ullist.innerHTML= `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas fritas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="Mayor precio">Mayor precio</li>
    <li id="Menor precio">Menor precio</li>
    `;
    const liElements= ullist.querySelectorAll("li");
    liElements.forEach((liElement)=> {
        liElement.addEventListener("click",()=>{
            handleClick(liElement);
        })
    })
    const handleClick = (elemento)=>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive");
            }else{
                if (elemento== el){
                    el.classList.add("liActive");
                }
            }
        })
    }
}
//guardar en localStorage

//recibir un producto
export const setInLocalStorage=(productIn)=>{
    //traer los elementos
    let productsInLocal=handleGetProductLocalStorage()
    const existingIndex=productsInLocal.findIndex((productLocal)=> productLocal.id === productIn.id);{
    
    //verificar si el elemento existe
    if (existingIndex !== -1) {
        //si existe debe reemplazarse  
        productsInLocal[existingIndex]=productIn;
    }else{
        // si no existe debe agregarse
        productsInLocal.push(productIn)
    }
    localStorage.setItem('products',JSON.stringify(productsInLocal));
    }
}
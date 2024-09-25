import { renderCategories } from "./src/service/categories";
import { openModal } from "./src/service/modal";
import { handleSearchProductByName } from "./src/service/searchBar";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';
//==========APLICACION========
export let categoriaActiva= null;
export const setCategoriaActiva= (categoriaIn)=>{
  categoriaActiva=categoriaIn;
}
export let productoActivo= null;
export const setproductoActivo= (productoIn)=>{
  productoActivo=productoIn;
}
//const buttonAdd = document.getElementById("buttonAddElement");
//buttonAdd.addEventListener('click', ()=>{
//  openModal();
//});

document.addEventListener("DOMContentLoaded", () => {
  handleGetProductsToStore();
  renderCategories();

  const buttonAdd = document.getElementById("buttonAddElement");
  if (buttonAdd) {
    buttonAdd.addEventListener("click", () => {
      openModal();
    });
  }
  //buttonSearch
  /*
  const buttonSearch = document.getElementById("buttonSearch");
  console.log("boton buscar", buttonSearch);
  if (buttonSearch) {
    buttonSearch.addEventListener("click", () => {
      handleSearchProductByName();
    });
  } */ 
});
document.addEventListener("DOMContentLoaded", () => {
  const buttonSearch = document.getElementById("ButtonSearch");
  if (buttonSearch) {
    buttonSearch.addEventListener("click", () => {
      handleSearchProductByName();
    });
  } else {
    console.error("No se encontró el botón con el ID 'buttonSearch'");
  }
});



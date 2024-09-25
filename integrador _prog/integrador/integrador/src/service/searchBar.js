import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName= ()=>{
    const inputHeader= document.getElementById("InputHeader");
    const products= handleGetProductLocalStorage();
    console.log("Productos obtenidos del localStorage:", products);
    const result=products.filter((el)=>el.name.toLowerCase().includes(inputHeader.value.toLowerCase()));
    console.log("Resultados de la búsqueda:", result);
    handleRenderList(result);
}
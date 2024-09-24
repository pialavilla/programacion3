import { renderCategories } from "./src/services/categories.js";
import { setInLocalStorage } from "./src/persistence/localstorage.js";
import { handleGetProductLocalStorage } from "./src/persistence/localstorage.js";
import "./style.css";


renderCategories();

/* ===========product================== */
const buttonAdd=document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click',()=>{
    openModal()
});
/*===========POPUP============ */

const cancelButton=document.getElementById("cancelButton");
cancelButton.addEventListener('click',()=>{
    handleCancelButton()
});
const handleCancelButton=()=>{
    closeModal()
}
//FUNCIONES ABRIR - CERRAR MODAL
const openModal=()=>{
    const modal=document.getElementById("modalPopUp")
    modal.style.display='flex'
}
const closeModal=()=>{
    const modal=document.getElementById("modalPopUp")
    modal.style.display='none'
}

//GUARDAR O MODIFICAR ELEMENTOS
const acceptButton=document.getElementById("acceptButton");
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElement()
})
const handleSaveOrModifyElement=()=>{
    const name=document.getElementById("nombre").value;
    const img=document.getElementById("img").value;
    const price=document.getElementById("precio").value;
    const categories=document.getElementById("categoria").value;
    let object = {
        id:new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categories
    }; 
    console.log(object);
    setInLocalStorage(object);
    handleGetProductLocalStorage();
    closeModal();
};
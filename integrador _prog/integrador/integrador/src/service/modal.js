import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteproduct} from "./products";

const resetModal = () => {
    const name = document.getElementById("nombre"),
    img = document.getElementById("img"),
    price = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    img.value = "";
    price.value = 0;
    name.value = "";
    categories.value = "Seleccione una categoria";
};
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete=document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display="block";
    }else{
        buttonDelete.style.display="none";
    }

    if(productoActivo){
    const name = document.getElementById("nombre"),
    img = document.getElementById("img"),
    price = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    img.value = productoActivo.img;
    price.value = productoActivo.price;
    name.value = productoActivo.name;
    categories.value = productoActivo.categories;
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
};
const handleCancelButton = () => {
    closeModal();
};

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', handleCancelButton);

const deleteButton= document.getElementById("deleteButton");
deleteButton.addEventListener("click",()=>{
    handbuttonDelete();
});

const handbuttonDelete=()=>{
    handleDeleteproduct()
}

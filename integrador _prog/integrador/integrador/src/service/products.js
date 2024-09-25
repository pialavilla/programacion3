import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { setInLocalStorage } from "./categories";
import Swal from "sweetalert2";
import { closeModal } from "./modal";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveOrModifyElement();
});

const handleSaveOrModifyElement = () => {
  const name = document.getElementById("nombre").value;
  const img = document.getElementById("img").value;
  const price = document.getElementById("precio").value;
  const categories = document.getElementById("categoria").value;

  let object=null;
  if(productoActivo){
    object={
      ...productoActivo,
      name,
      img,
      price,
      categories,
    }
  }else{
    object = {
      id: new Date().toISOString(),
      name,
      img,
      price,
      categories,
    };
  }
  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado correctamente!",
    icon: "success"
  });
  
  console.log(object);
  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();
}
// eliminar elemento
export const handleDeleteproduct= ()=>{
  Swal.fire({
    title: "Desea eliminar el elemento?",
    text: "si lo eliminas sera permanentemente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "si,eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      const products=handleGetProductLocalStorage();
      const result = products.filter((el)=> el.id !== productoActivo.id);
      localStorage.setItem ("products", JSON.stringify(result));
      const newProducts = handleGetProductLocalStorage();
      handleRenderList(newProducts);
      closeModal();
    }else{
      closeModal();
    }
  });
}

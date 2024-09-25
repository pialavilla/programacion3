import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "../service/modal";
export const handleRenderList=(productosIn)=>{
    const burgers = productosIn.filter((el)=>el.categories==="Hamburguesas")
    const papas = productosIn.filter((el) =>el.categories==="Papas fritas")
    const gaseosas = productosIn.filter((el)=>el.categories==="Gaseosas")

    const renderProductGroup = (productos,title)=>{
        console.log(productos);
        if(productos.length>0){
            const productosHTML= productos.map((productos,index)=>{
                return `<div class='containerTargetItem' id= 'product-${productos.categories}-${index}'>
                <div>
                <img src='${productos.img}'/>
                <div>
                <h2>'${productos.name}' </h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${productos.price}</p>
                </div>
                </div>
                </div>`;
            });
            return `
                <section class='sectionStorage'>
                <div class='containerTitleSction'>
                <h3>${title}</h3>
                </div>
                <div class= 'containerProductStore'>
                ${productosHTML.join("")}
                </div>
                </section>
            `;
        }else{
            return "";
        }
};

const products = handleGetProductLocalStorage();
console.log('Productos desde localStorage:', products);

//renderizar cada uno d los productos
const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${renderProductGroup(burgers,"Hambuerguesas")}
    ${renderProductGroup(papas,"Papas fritas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;
    const addEvents = (productosIn)=>{
        console.log(productosIn);
        if(productosIn){
            productosIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categories}-${index}`);
                productContainer.addEventListener("click", () => {
                    setproductoActivo(element);
                    openModal();
                });
            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
}; 
export const handleGetProductsToStore=()=>{
    const products=handleGetProductLocalStorage();
    handleRenderList(products);
}
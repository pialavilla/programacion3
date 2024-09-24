//*store*//

import {handleGetProductsToStore} from "../persistence/localstorage";


export const handleRenderList=(productosIn)=>{
    const burgers = productosIn.filter((el)=>el.categories==="hambuerguesas")
    const papas = productosIn.filter((el)=>el.categories==="papas")
    const gaseosas = productosIn.filter((el)=>el.categories==="gaseosas")

    const rederProductGroup = (productos,title)=>{
        if(productos.length>0){
            const productosHTML= productos.map((producto,index)=>{
                return`<div id= 'product-${producto.categories}-${index}'>
                <div>
                <img src=${producto.imagen}/>

                <div>
                <h2>${producto.nombre} </h2>
                </div>
            
                <div>
                <p><b>Precio:</b> ${producto.precio}</p>
                <p><b>Categoria:</b> ${producto.Categoria}</p>
                </div>

                </div>
                </div>`;
            });
            return `
                <section>
                <h3>${title}</h3>
                <div>
                ${productosHTML.join("")}
                </div>
                </section>
            `;
        }else{
            return"";
        }
};


//renderizar cada uno d los productos
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${rederProductGroup(burgers,"Hambuerguesas")}
    ${rederProductGroup(papas,"Papas")}
    ${rederProductGroup(gaseosas,"Gaseosas")}
    `;
    const addEvents = (productosIn)=>{
        console.log(productosIn);
        if(productosIn){
            productosIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${productosIn.categories}-${index}`);
                if(productContainer){
                    productContainer.addEventListener('click', () => {
                    console.log("productoActivo",element);
                    });
                }
            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};   


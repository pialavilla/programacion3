/*===========LOCALSTORAGE============== */

export const handleGetProductLocalStorage=()=>{
    const products=JSON.parse(localStorage.getItem('products'));
    if (products) {
        return products;
    }else{
        return [];
    }
};
//guardar en localStorage

//recibir un producto
export const setInLocalStorage=(productIn)=>{
    //traer los elementos
    let productsInLocal=handleGetProductLocalStorage()
    console.log(productIn);
    const existingIndex=productsInLocal.findIndex((productLocal)=> productLocal.id === productIn.id);
    
    //verificar si el elemento existe
    if (existingIndex !== -1) {
        //si existe debe reemplazarse  
        productsInLocal[existingIndex]=productIn;
    }else{
        // si no existe agregarse
        productsInLocal.push(productIn)
    }
    localStorage.setItem('products',JSON.stringify(productsInLocal));
}

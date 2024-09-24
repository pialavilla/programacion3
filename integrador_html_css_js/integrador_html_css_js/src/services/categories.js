//render de la vista categorias
export const renderCategories=()=>{
    //tomamos elementos de la lista
    const ulList=document.getElementById("listFilter");
    //creamos esos elementos dentro de la lista
    ulList.innerHTML=`
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas Fritas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;
    //añadimos dinamicamente el evento click
    const liElements=ulList.querySelectorAll("li")
    liElements.forEach((element)=>{
        element.addEventListener('click',()=>{
           handleClick(element) 
            
        })
    })
    //verificamos y manejamos el estilo del elemento activo
    const handleClick=(element)=>{
        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive")
            }else{
                if (element===el) {
                    el.classList.add("liActive") 
                }
            }
        })
    }
};
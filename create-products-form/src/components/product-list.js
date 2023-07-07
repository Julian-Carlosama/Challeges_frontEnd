import React, { useState } from "react";
import TableProducts from "./table-products";

function ProductsList() {
    const [product, setProduct] = useState([]);


    return (
        <div>
            { product.length === 0 ? (
                <p>¡Por ahora no tienes creado ningún producto!</p>
                
                )
                : (
                    <TableProducts/> 
                )
            }
        </div>
    )

}

export default ProductsList;

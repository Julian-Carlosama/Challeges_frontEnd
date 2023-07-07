import React from "react";

function ButtonCreate({ setProduct }) {
    const handleClick = () => {
        // Aquí puedes implementar la lógica para crear un nuevo producto
        // Por ejemplo, puedes abrir un formulario modal para que el usuario ingrese los datos del producto
        // Luego, puedes agregar el nuevo producto a la lista de productos utilizando setProduct
        const newProduct = { code: 123, name: "Nuevo producto", description: "Descripción del nuevo producto", quantity: 1, date: "2023-05-24" };
        setProduct(prevProduct => [...prevProduct, newProduct]);
      };
    return (
        <button onClick={handleClick}>Crear productomm</button>

    )
}

export default ButtonCreate;

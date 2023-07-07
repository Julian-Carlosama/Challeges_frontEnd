import React, { useState } from "react";

import { Overlay, ModalContainer, CloseBotton, Content } from './modalStyles';

function ModalWindow({ children, state, changeState, title, handleSubmit, handleCreateProduct }) {
    const [, setFormData] = useState({
        code: "",
        name: "",
        description: "",
        quantity: "",
        creation: "",
    });

    /*const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };*/

    /*const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            code: formData.code,
            name: formData.name,
            description: formData.description,
            quantity: formData.quantity,
            creation: formData.creation,
        };
        handleCreateProduct(newProduct);
        // Limpiar el formulario
        setFormData({
            code: "",
            name: "",
            description: "",
            quantity: "",
            creation: "",
        });
        // Cerrar la ventana modal
        changeState(false);
    };*/

    // Reset el modal actual con el boton X
    const handleCloseModal = () => {
        setFormData({
          code: "",
          name: "",
          description: "",
          quantity: "",
          creation: "",
        });
        changeState(false);
      };
    return (
        <>
            {state &&
                <Overlay>
                    <ModalContainer>
                        <Content>
                            <h1>{title}</h1>
                            {children}
                            <CloseBotton onClick={handleCloseModal} >X</CloseBotton>
                            
                        </Content>
                    </ModalContainer>
                </Overlay>
            }
        </>
    )
}

export default ModalWindow;

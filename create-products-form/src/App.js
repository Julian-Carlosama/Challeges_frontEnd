import './App.css';
import TableProducts from './components/table-products';
import React, { useState } from 'react';
import { ButtonContainer, Button } from './components/modalWindow/modalStyles';
import ModalWindow from './components/modalWindow/modalWindow';

function App() {
    const [createModal, setCreateModal] = useState(false);
    const [product, setProduct] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);



    const handleCreateProduct = (newProduct) => {
        setProduct([...product, newProduct]);
        setCreateModal(false);
    };


    // Data create product modal
    const [formData, setFormData] = useState({
        code: "",
        name: "",
        description: "",
        quantity: "",
        creation: "",
    });

    // Handle create produtc modal
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle create modal
    const handleSubmit = (e) => {
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
        //changeState(false);
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setEditModalOpen(true);
    };

    return (
        <div className="App">
            <div className='Main-window'>
                <h1 className='text-5xl font-medium my-20'>Welcome</h1>
                <h2 className='my-14'>Lista de productos</h2>

                {product.length > 0 ? (
                    <TableProducts product={product} setProduct={setProduct} handleEdit={handleEdit} />
                ) : (
                    <p>No tienes productos creados.</p>
                )}

                <ModalWindow
                    state={createModal}
                    changeState={setCreateModal}
                    title="Crear Producto"
                    handleCreateProduct={handleCreateProduct}
                >
                    <form onSubmit={handleSubmit}>
                        <input
                            className="code-input"
                            type="text"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            placeholder="Código"
                        />
                        <input
                            className="name-input"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                        />
                        <input
                            className="description-input"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Descripción"
                        />
                        <input
                            className="quantity-input"
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Cantidad"
                        />
                        <input
                            className="creation-input"
                            type="date"
                            name="creation"
                            value={formData.creation}
                            onChange={handleChange}
                            placeholder="Creación"
                        />
                        <button type="submit">Guardar</button>
                    </form>
                </ModalWindow>

                {editModalOpen && (
                    <ModalWindow
                        state={editModalOpen}
                        changeState={setEditModalOpen}
                        title="Editar Producto"
                        handleCreateProduct={handleCreateProduct}
                        handleEdit={handleEdit}
                        selectedItem={selectedItem}
                    >
                        <form onSubmit={handleSubmit}>
                            <input
                                className="code-input"
                                type="text"
                                name="code"
                                value={selectedItem.code}
                                onChange={handleChange}
                                placeholder="Código"
                            />
                            <input
                                className="name-input"
                                type="text"
                                name="name"
                                value={selectedItem.name}
                                onChange={handleChange}
                                placeholder="Nombre"
                            />
                            <input
                                className="description-input"
                                type="text"
                                name="description"
                                value={selectedItem.description}
                                onChange={handleChange}
                                placeholder="Descripción"
                            />
                            <input
                                className="quantity-input"
                                type="number"
                                name="quantity"
                                value={selectedItem.quantity}
                                onChange={handleChange}
                                placeholder="Cantidad"
                            />
                            <input
                                className="creation-input"
                                type="date"
                                name="creation"
                                value={selectedItem.creation}
                                onChange={handleChange}
                                placeholder="Creación"
                            />
                            <button type="submit">Guardar</button>
                        </form>

                    </ModalWindow>

                )}



                <ButtonContainer>
                    <Button onClick={() => setCreateModal(true)}>Crear Producto</Button>
                </ButtonContainer>

            </div>
        </div>
    );
}

export default App;

import React from "react";
import { TableP } from './modalWindow/modalStyleTable';

function TableProducts({ product, setProduct, handleEdit}) {

    /*const [editProduct, setEditProduct] = useState(null);

    const handleEdit = (item) => {
        setSelectedItem(item);
        //setEditProduct(product);
        setFormData({
            code: item.code,
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            creation: item.creation
          });
    };*/


    const handleDelete = (product) => {

        const option = window.confirm("¿Deseas eliminar este producto? Código: " + product.code);

        if (option) {
            setProduct((prevProducts) => {
                const updateProduct = prevProducts.filter((item) => item.code !== product.code);
                return updateProduct;
            });
        }
    }

    return (
        <TableP>
            <table className="min-w-full">
                <thead className="bg-indigo-600">
                    <tr>
                        <td className="Code py-2 px-2 ">Código</td>
                        <td className="Name py-2 px-2">Nombre</td>
                        <td className="Desc py-2 px-2">Descriptción</td>
                        <td className="Quant py-2 px-2">Cantidad</td>
                        <td className="Creat py-2 px-2">Creación</td>
                        <td className="Acti">Acción</td>
                    </tr>
                </thead>
                <tbody className="bg-violet-600">
                    {product.map((item) => (
                        <tr  key={item.code}>
                            <td className="Code py-2 px-2 ">{item.code}</td>
                            <td className="Name py-2 px-2">{item.name}</td>
                            <td className="Desc py-2 px-2 ">{item.description}</td>
                            <td className="Quant py-2 px-2">{item.quantity}</td>
                            <td className="Creat py-2 px-2">{item.creation}</td>
                            <td className="Acti py-2 px-2">
                                <button className="bg-green-500 " onClick={() => handleEdit(item)}>Editar</button> {' '}
                                <button className="bg-red-700 " onClick={() => handleDelete(item)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableP>

    )
}

export default TableProducts;

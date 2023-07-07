import styled from 'styled-components';

export const TableP = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 5rem;

    table thead .Code, tbody .Code {
        width: 5%;
    }

    table thead .Name, tbody .Name {
        width: 15%;
    }

    table thead .Desc, tbody .Desc {
        width: 45%;
    }

    table thead .Quant, tbody .Quant {
        width: 5%;
    }

    table thead .Creat, tbody .Creat {
        width: 15%;
    }

    table thead .Acti, tbody .Acti {
        width: 15%;
    }

    /* Color filas */
    table tr:nth-child(even) {
        background-color: #58369e;
    }
      
    table tbody:tr:nth-child(odd) {
        background-color: #5757ee;
    }

    table tbody tr td {
        
        font-size: 1.2rem;
    }


    /* Media query para pantallas más estrechas en table */
    @media (max-width: 925px) {
        padding: 0;
        overflow-x: auto;
        width: 100vw;
    }

`;

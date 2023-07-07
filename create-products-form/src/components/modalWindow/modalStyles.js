import styled from 'styled-components';


export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`

    min-height: 15rem;
    background: #fff;
    color: #000;
    position: relative;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    
`;


export const CloseBotton = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 30px;
	height: 30px;
	border: none;
	cursor: pointer;
	transition: .3s ease all;
	color: #1766DC;
	background: none;
	border-radius: 5px;

	&:hover {
		background: #f2f2f2;
	}
`;

export const FormContainer = styled.div`
	width: 100%;
	background: #000;
	margin: 20px;
  	padding: 10px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 40px;
	
`;

export const Button = styled.button`
	display: block;
	margin: .1rem;
	padding: .2rem 1rem;
	color: #fff;
	border: none;
	border-radius: 5px;
	background: #4F46E5;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	transition: .3s ease all;
	&:hover {
		background: #3735d5;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 10px 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	form {
		display: flex;
		width: 60vw;
		padding: 1rem 0rem 1rem 0rem;
		align-items: center;
    	flex-wrap: wrap;
		input,
    	select,
		
    	textarea {
			height: 2.5rem;
			flex: 1;
      		margin-right: .1rem;
			font-size: 1.5rem;
			border: 1px solid #ccc;
      		border-radius: 5px;
			text-align: center;

			  &.code-input {
				width: 4vw;
			  }
		
			  &.name-input {
				width: 10vw;
			  }
		
			  &.description-input {
				width: 20vw;
			  }
		
			  &.quantity-input {
				width: 5vw;
			  }
		
			  &.creation-input {
				width: 40vw;
			  }

			  &::creation-input::placeholder {
				color: red;
			  }
	

			/* Estilos para el placeholder */
      		&::placeholder {
        		font-size: 1.5rem; 
        		color: #999; 
      		}
				
    	},
		button {
			display: block;
			border-radius: 5px;
			color: #fff;
			border: none;
			background: #1766DC;
			cursor: pointer;
			font-size: 1rem;
			padding: .6rem;
			font-family: 'Roboto', sans-serif;
			font-weight: 500;
			transition: .3s ease all;
			&:hover {
			background: #0066FF;
		}
	},
		
	}



	/* Media query para pantallas más estrechas */
  @media (max-width: 768px) {
    form {
		width: 90vw;
      	flex-direction: column;
      input,
      select,
      textarea {
		margin: .5rem 0rem .5rem 0rem;
		
        
		&.code-input {
			width: 30vw;
		  }
	
		  &.name-input {
			width: 70vw;
		  }
	
		  &.description-input {
			width: 80vw;
			height: 5rem;
		  }
	
		  &.quantity-input {
			width: 20vw;
		  }
	
		  &.creation-input {
			width: 40vw;
		  }
      }
    }
  }

`;
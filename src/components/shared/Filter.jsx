import React, {useEffect} from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
    margin-bottom: 3rem;
`
const Boton = styled.button`
    margin-right: 2rem;
    min-width: 5rem;
    padding: 0.5rem 1rem;
    border: none;
    background: ${props => props.theme.body};
    color: rgb(65,98,168);
    border-radius: 1rem;
    border: 2px solid rgb(28,36,53);
    font-weight: bold;
    cursor: pointer;

    &.active{
        color: ${props => props.theme.body};
        background: rgb(65,98,168);
    }

    &:hover {
        color: ${props => props.theme.body};
        background: rgb(65,98,168);
    }

    
`

const Filter = ({popular,setFilter,activeGenre, setActiveGenre}) => {
 
    useEffect(()=>{
        if(activeGenre === 0){
            setFilter(popular);
            return;
        }
        const filtrar = popular.filter(movie => movie.genre_ids.includes(activeGenre));
        setFilter(filtrar);

    },[activeGenre])

    
    return (
    <Contenedor>
        <Boton className={activeGenre === 0 ? 'active' : ""} onClick={()=> setActiveGenre(0)}>All</Boton>
        <Boton className={activeGenre === 35 ? 'active' : ""} onClick={()=> setActiveGenre(35)}>Comedy</Boton>
        <Boton className={activeGenre === 28 ? 'active' : ""} onClick={()=> setActiveGenre(28)}>Action</Boton>
    </Contenedor>
  )
}

export default Filter
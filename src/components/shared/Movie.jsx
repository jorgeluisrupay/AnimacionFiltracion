import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Contenedor = styled(motion.div)`
    margin: 0;
`
const Title = styled.h2`
    color: ${props => props.theme.text};
    font-size: 1.5rem;
    height: 60px ;
`
const Img = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
`
const Movie = ({movie}) => {
  return (
    <Contenedor
        layout
        animate={{opacity: 1, scale: 1}}
        initial={{opacity: 0, scale: 0}}
        exit={{opacity: 0, scale: 0}}
        transition={{duration: 1}}
    >
        <Title>Title : {movie.title} </Title>
        <Img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
    </Contenedor>
  )
}

export default Movie
import React, {useEffect,useState} from 'react'
import styled from 'styled-components';
import Filter from '../shared/Filter';
import Movie from '../shared/Movie';
import { motion, AnimatePresence } from 'framer-motion';

const Contenedor = styled.div`
  margin: 5% 20%;
`

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  
`

const Movies = () => {

    const [popular, setPopular] = useState([]);
    const [filter, setFilter] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        fetchPopular();
    }, [])
    
    
    const fetchPopular = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ff1740f8a1d9c071719d351159bd4399&language=es-PE&page=1');
        const movies = await data.json();
        // console.log(movies);
        setPopular(movies.results);
        setFilter(movies.results);
    }
    console.log(filter);

  return (
    <>
        <Contenedor>
            <Filter popular={popular} setFilter={setFilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
            <Box 
                layout
            >
                <AnimatePresence>
                    {filter.map(movie => {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </AnimatePresence>    
            </Box>
        </Contenedor>
    </>
  )
}

export default Movies
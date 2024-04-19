import React from 'react'
import Poster from './Poster';
import { Grid } from '@mui/material';

const Posters = () => {
    const data1 = [
        {
            id: 1,
            title: "Senior Chef",
            description: "Become a vital part of our team as a Delivery Boy, responsible for ",
            image: "https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I=",
        },
        {
            id: 2,
            title: "Delivery boy",
            description: "Become a vital part of our team as a Delivery Boy, responsible for ",
            image: "https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I=",
        },
        {
            id: 3,
            title: "Receptionist",
            description: "Become a vital part of our team as a Delivery Boy, responsible for ",
            image: "https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I=",
        },
        {
            id: 4,
            title: "waiter",
            description: "Become a vital part of our team as a Delivery Boy, responsible for ",
            image: "https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I=",
        },
        {
            id: 5,
            title: "Finance Manager",
            description: "Become a vital part of our team as a Delivery Boy, responsible for ",
            image: "https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I=",
        },
    ];
    return (
        <Grid
        sx={{
            width: '80%',
            margin: 'auto',
            marginTop: '3rem',
            border: '2px solid #E0E7FF',
            boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
            borderRadius: '0.5rem',
            position: 'relative',
          }}
        >
            <Grid
                sx={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    flex: '1', 
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: '#4B5563',
                  }}                  
            >   
            <h4>Available Job Vacancies</h4>
            </Grid>

            {/*map through our data*/}
            <Grid
                sx={{
                    padding: '1rem',
                    '@media (min-width: 1024px)': {
                      padding: '1.75rem',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.25rem', 
                    width: 'calc(95% - 100px)',
                    margin: 'auto', 
                  }}                  
            >
                {data1.map((poster, i) => (
                    <Poster poster={poster} key={i} />
                ))}
            </Grid>
        </Grid>
    )
}

export default Posters
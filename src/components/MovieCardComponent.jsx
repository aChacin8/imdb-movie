import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function MovieCardComponent({movie , addToPlaylist, title, id, path, resume, average, trailer }) {

    return (
        <>
            <NavLink to={`/movie/${movie}/${encodeURIComponent(title)}/${id}/${encodeURIComponent(path)}/${encodeURIComponent(resume)}/${encodeURIComponent(average)}`}>
                <Card style={{ width: '18rem' }} className='card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${path}`} width={250} />
                    <Card.Body>
                        <Card.Title className='card-title'>{title}</Card.Title>
                        <Card.Text className='card-text'>Calificacion: {average}</Card.Text>
                        <Button onClick={()=> addToPlaylist(movie)} className='playlist-button'>Agregar a Lista</Button>
                    </Card.Body>
                </Card>
            </NavLink>

        </>

    );
}
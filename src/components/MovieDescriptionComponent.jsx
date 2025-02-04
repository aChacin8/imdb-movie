import { Modal, Button } from 'react-bootstrap';

export default function MovieDescriptionComponent({ movie, addToPlaylist, title, id, path, resume, average, trailer, showModal, setShowModal }) {
    return (
        <>
            <div className='movie-container'>
                <h1 className='movie-title'>{title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${path}`} alt={title} id='img-desc' />
                <p className='movie-label'><strong>Resumen:</strong></p>
                <p className='movie-text'>{resume}</p>
                <p className='movie-label'><strong>Calificación:</strong></p>
                <p className='movie-average'>{average}</p>
                <div className='button-group'>
                    <button onClick={() => setShowModal(true)} className='trailer-button'>Ver Tráiler</button>
                    <button onClick={() => addToPlaylist(movie)} className='playlist-button'>Agregar a Lista</button>   
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>{title} - Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    {trailer ? (
                        <iframe width="100%" height="315" src={trailer} title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    ) : (
                        <p>No hay tráiler disponible.</p>
                    )}
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

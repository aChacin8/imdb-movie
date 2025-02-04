import Container from 'react-bootstrap/Container';

export default function FooterComponent() {
    return (
        <footer className="footer bg-dark text-warning text-center py-3">
            <Container>
                <p className="mb-0">&copy; 2024 Alejandro Andrés Chacín Nava. Todos los derechos reservados.</p>
            </Container>
        </footer>
    );
}
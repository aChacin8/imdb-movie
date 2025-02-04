import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, FormControl } from 'react-bootstrap';
import { useState } from 'react';

export default function NavBarComponent({ setSearchTerm }) {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setSearchTerm(e.target.value);
    };

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="/">IMDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/playlist">Playlist</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Buscar película..." className="me-2" value={search}
                            onChange={handleSearchChange}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

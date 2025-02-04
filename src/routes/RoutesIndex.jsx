import { Routes, Route } from 'react-router-dom';
import HomeImdb from '../pages/HomeImdb';
import InfoMovie from '../pages/InfoMovie';
import Playlist from '../pages/Playlist';

export default function RoutesIndex() {
    return (
        <Routes>
            <Route path='/' element={<HomeImdb />} />
            <Route path='/movie/:movie/:title/:id/:path/:resume/:average' element={<InfoMovie />} />
            <Route path='/playlist' element={<Playlist/>}/>
        </Routes>
    );
}

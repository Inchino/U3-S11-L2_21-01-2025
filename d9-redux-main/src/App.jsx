import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import ListIndicator from './components/ListIndicator';

function App() {
  return (
    <BrowserRouter>
      <ListIndicator />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


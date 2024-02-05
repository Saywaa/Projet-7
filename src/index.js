import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from "./pages/FicheLogement";
import About from "./pages/About";
import Error from './pages/Error';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                <Header />
                <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
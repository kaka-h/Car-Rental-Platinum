import React from 'react';
import './style.css';
import notfound from '../../assets/image/nf.png'

function NotFound() {
  return (
    <div className="notfound">
      <header className="notfound-header">
        <img src={notfound} alt="notfound" className='notfound-logo' />
        <h1>404 Not Found</h1>
        <p>Maaf, Halaman yang anda cari tidak ditemukan.</p>
      </header>
    </div>
  );
}

export default NotFound

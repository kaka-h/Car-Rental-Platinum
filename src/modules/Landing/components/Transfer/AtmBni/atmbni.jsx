import { useState } from 'react';
import './style.css'

const AtmBni = () => {
    const [activeMethod, setActiveMethod] = useState('ATM');

    const handleMethodClick = (method) => {
        setActiveMethod(method);
    };

    return (
        <div className='desc-transfer-bank-bni'>
            <div className='wrapper-desc-bank-bni'>
                <div className='wrapper-title-desc-bank-bni' onClick={() => handleMethodClick('ATM')}>
                    <p className='title-desc-bank-bni' >ATM BNI</p>
                </div>
                {activeMethod === 'ATM' && (
                    <ul className='desc-bank-bni'>
                        <li>Masukkan kartu ATM lalu PIN</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account”</li>
                        <li>Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                    </ul>
                )}
            </div>
            
            <div className='wrapper-desc-bank-bni'>
                <div className='wrapper-title-desc-bank-bni' onClick={() => handleMethodClick('M-BNI')}>
                    <p className='title-desc-bank-bni' >M-BNI</p>
                </div>
                {activeMethod === 'M-BNI' && (
                    <ul className='desc-bank-m-bni'>
                        <li>Buka aplikasi BNI mobile.</li>
                        <li>Pilih menu "m-Transfer".</li>
                        <li>Pilih menu "BNI Virtual Account".</li>
                        <li>Masukkan nomor BNI Virtual Account.</li>
                        <li>Klik "Send".</li>
                        <li>Cek nominal yang muncul.</li>
                        <li>Masukkan PIN m-BNI.</li>
                        <li>Notifikasi transaksi berhasil akan muncul.</li>
                    </ul>
                )}
            </div>

            <div className='wrapper-desc-bank-bni'>
                <div className='wrapper-title-desc-bank-bni'  onClick={() => handleMethodClick('BNI Klik')}>
                    <p className='title-desc-bank-bni'>BNI Klik</p>
                </div>
                {activeMethod === 'BNI Klik' && (
                    <ul className='desc-bank-bni-klik'>
                        <li>Login pada aplikasi KlikBNI, masukkan user ID & PIN.</li>
                        <li>Pilih “Transfer Dana“, kemudian pilih “Transfer ke BNI Virtual Account“.</li>
                        <li>Masukkan no. BNI Virtual Account & klik “Lanjutkan“.</li>
                        <li>Pastikan data yang dimasukkan sudah benar, dan Input “Respon KeyBNI“, lalu klik “Kirim“.</li>
                    </ul>
                )}
            </div>

            <div className='wrapper-desc-bank-bni'>
                <div className='wrapper-title-desc-bank-bni' onClick={() => handleMethodClick('Internet Banking')}>
                    <p className='title-desc-bank-bni' >Internet Banking</p>
                </div>
                {activeMethod === 'Internet Banking' && (
                    <ul className='desc-bank-bni-IB'>
                        <li>Buka BNI mobile, pilih menu “m-Transfer”</li>
                        <li>Pilih menu “BNI Virtual Account”</li>
                        <li>Masukkan nomor BNI Virtual Account dan klik “Send”</li>
                        <li>Cek nominal yang muncul</li>
                        <li>Masukkan PIN m-BNI</li>
                        <li>Transaksi Berhasil</li>
                    </ul>
                )}
            </div>

        </div>
    );
}

export default AtmBni;

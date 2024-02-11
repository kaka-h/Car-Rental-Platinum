import { useState } from 'react';
import './style.css'

const AtmMandiri = () => {
    const [activeMethod, setActiveMethod] = useState('ATM');

    const handleMethodClick = (method) => {
        setActiveMethod(method);
    };

    return (
        <div className='desc-transfer-bank-mandiri'>
            <div className='wrapper-desc-bank-mandiri'>
                <div className='wrapper-title-desc-bank-mandiri' onClick={() => handleMethodClick('ATM')}>
                    <p className='title-desc-bank-mandiri'>ATM Mandiri</p>
                </div>
                {activeMethod === 'ATM' && (
                    <ul className='desc-bank-mandiri'>
                        <li>Masukkan kartu ATM lalu PIN</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account”</li>
                        <li>Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                    </ul>
                )}
            </div>
            
            <div className='wrapper-desc-bank-mandiri'>
                <div className='wrapper-title-desc-bank-mandiri' onClick={() => handleMethodClick('M-Mandiri')}>
                    <p className='title-desc-bank-mandiri'>M-Mandiri</p>
                </div>
                {activeMethod === 'M-Mandiri' && (
                    <ul className='desc-bank-m-mandiri'>
                        <li>Buka aplikasi Mandiri mobile.</li>
                        <li>Pilih menu "m-Transfer".</li>
                        <li>Pilih menu "Mandiri Virtual Account".</li>
                        <li>Masukkan nomor Mandiri Virtual Account.</li>
                        <li>Klik "Send".</li>
                        <li>Cek nominal yang muncul.</li>
                        <li>Masukkan PIN m-Mandiri.</li>
                        <li>Notifikasi transaksi berhasil akan muncul.</li>
                    </ul>
                )}
            </div>

            <div className='wrapper-desc-bank-mandiri'>
                <div className='wrapper-title-desc-bank-mandiri' onClick={() => handleMethodClick('Mandiri Klik')}>
                    <p className='title-desc-bank-mandiri' >Mandiri Klik</p>
                </div>
                {activeMethod === 'Mandiri Klik' && (
                    <ul className='desc-bank-mandiri-klik'>
                        <li>Login pada aplikasi KlikMandiri, masukkan user ID & PIN.</li>
                        <li>Pilih “Transfer Dana“, kemudian pilih “Transfer ke Mandiri Virtual Account“.</li>
                        <li>Masukkan no. Mandiri Virtual Account & klik “Lanjutkan“.</li>
                        <li>Pastikan data yang dimasukkan sudah benar, dan Input “Respon KeyMandiri“, lalu klik “Kirim“.</li>
                    </ul>
                )}
            </div>

            <div className='wrapper-desc-bank-mandiri'>
                <div onClick={() => handleMethodClick('Internet Banking')} className='wrapper-title-desc-bank-mandiri'>
                    <p className='title-desc-bank-mandiri'>Internet Banking</p>
                </div>
                {activeMethod === 'Internet Banking' && (
                    <ul className='desc-bank-mandiri-IB'>
                        <li>Buka Mandiri mobile, pilih menu “m-Transfer”</li>
                        <li>Pilih menu “Mandiri Virtual Account”</li>
                        <li>Masukkan nomor Mandiri Virtual Account dan klik “Send”</li>
                        <li>Cek nominal yang muncul</li>
                        <li>Masukkan PIN m-Mandiri</li>
                        <li>Transaksi Berhasil</li>
                    </ul>
                )}
            </div>

        </div>
    );
}

export default AtmMandiri;

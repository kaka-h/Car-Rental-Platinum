import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import './style.css';

const DownloadEticket = () => {
    const handleDownload = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        const { height } = page.getSize();
        const fontSize = 30;

        const text = 'PDF Viewer';
        page.drawText(text, { x: 50, y: height - 4 * fontSize, fontSize });

        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'eticket.pdf');
    };

    return (
        <div>
            <div className="box-eticket">
                <div className="desc-box-eticket">
                    <div>
                        <p className="fw-bold mb-3">Invoice</p>
                        <p style={{ color: '#8A8A8A' }}>*no invoice</p>
                    </div>
                    <div onClick={handleDownload} className="wrapper-unduh-eticket">
                        <i className="bi bi-download" style={{ color: '#0D28A6' }}></i>
                        <button className="btn-download-eticket">
                            Unduh
                        </button>
                    </div>
                </div>
                <div className="wrapper-img-eticket">
                    <i className="bi bi-image fs-3"></i>
                    <p>PDF Viewer</p>
                </div>
            </div>
        </div>
    );
};

export default DownloadEticket;

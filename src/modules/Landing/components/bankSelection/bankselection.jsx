import { useSelector } from 'react-redux';
import { selectBank } from '../../features/bankReducer/bankSlice';
import './style.css';

const BankSelection = ({ handleBank, selectBankTransfer }) => {
    const bank = useSelector(selectBank);

  return (
    <div className="paymain-left">
      <div>
        <h1 className="title-left-paymain">Pilih Bank Transfer</h1>
        <p className="text-left-paymain">
          Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
        </p>
      </div>
      <div className="btn-left-paymain">
        <div
          className={`d-flex mb-2 position-relative ${
            selectBankTransfer === 'BCA Transfer' ? 'selected' : ''
          }`}
          id="BCA Transfer"
          onClick={() => handleBank('BCA Transfer')}
        >
          <p className="bank">{bank.bca.title}</p>
          <p className="mt-1">{bank.bca.transfer}</p>
          {selectBankTransfer === 'BCA Transfer' && (
            <i className="bi bi-check2 check-left-paymain"></i>
          )}
        </div>
        <hr />
        <div
          className={`d-flex mb-2 position-relative ${
            selectBankTransfer === 'BNI Transfer' ? 'selected' : ''
          }`}
          id="BNI Transfer"
          onClick={() => handleBank('BNI Transfer')}
        >
          <p className="bank">{bank.bni.title}</p>
          <p className="mt-1">{bank.bni.transfer}</p>
          {selectBankTransfer === 'BNI Transfer' && (
            <i className="bi bi-check2 check-left-paymain"></i>
          )}
        </div>
        <hr />
        <div
          className={`d-flex mb-2 position-relative ${
            selectBankTransfer === 'Mandiri Transfer' ? 'selected' : ''
          }`}
          id="Mandiri Transfer"
          onClick={() => handleBank('Mandiri Transfer')}
        >
          <p className="bank">{bank.mandiri.title}</p>
          <p className="mt-1">{bank.mandiri.transfer}</p>
          {selectBankTransfer === 'Mandiri Transfer' && (
            <i className="bi bi-check2 check-left-paymain"></i>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default BankSelection;
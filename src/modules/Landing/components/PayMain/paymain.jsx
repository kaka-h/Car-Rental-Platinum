import './style.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as requestAPI from '../../api/api'
import BankSelection from '../bankSelection/bankselection';
import { useSelector } from 'react-redux';
import { formatToIdr } from "@/utils"

const PayMain = () => {
    const [showChevdown, setShowChevdown] = useState(false)
    const [car, setCar] = useState({});
    const [cars, setCars] = useState({})
    const rentDuration = useSelector((state) => state.detail.rent_duration);
    const { id } = useParams()
    const [selectBankTransfer, setSelectBankTransfer] = useState(null);

    const handleBank = (bankId) => {
        if (selectBankTransfer === bankId) {
            setSelectBankTransfer(null);
        } else {
            setSelectBankTransfer(bankId);
        }
    };

    const handleClick = (e) => {
        if (!selectBankTransfer) {
            e.preventDefault();
        }
    }

    useEffect(() => {
        getCustOrder()
    }, []);

    const getCustOrder = async () => {
        const token = localStorage.getItem("access_token");
        const config = {
            headers: { access_token: token },
        };

        try {
            const res = await requestAPI.customerOrder(id, config);
            setCar(res.data)
            setCars(res.data.Car)
        } catch (error) {
            alert("Terjadi kesalahan di sisi Server!")
        }
    };

    const handleChevDown = () => {
        setShowChevdown(!showChevdown)
    }
    return (
        <div className='paymain'>
            <BankSelection selectBankTransfer={selectBankTransfer} handleBank={handleBank} />

            <div className="paymain-right">
                <div>
                    <p className='fw-bold ms-4 mt-4'>{cars.name}</p>
                    <p className='ms-4 text-secondary mb-5'>{cars.category}</p>
                </div>
                <div className='d-flex justify-content-between ms-4 me-3'>
                    <div className='paymain-price'>
                        <button onClick={handleChevDown} className='border-0 bg-white mb-4'>
                            {
                                showChevdown
                                    ?
                                    <p>
                                        Total
                                        <i className="bi bi-chevron-down ms-3" />
                                    </p>
                                    :
                                    <p>
                                        Total
                                        <i className="bi bi-chevron-up ms-3" />
                                    </p>
                            }
                        </button>
                        {showChevdown &&
                            <div>
                                <div>
                                    <p className='fw-bold'>Harga</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <ul>
                                        <li className='chevdown-text-left'>
                                            Sewa Mobil {formatToIdr(cars.price)} x {rentDuration} hari
                                        </li>
                                    </ul>
                                    <p className='chevdown-text-right-1'>{formatToIdr(car.total_price)}</p>
                                </div>

                                <div>
                                    <p className='fw-bold'>Biaya Lainnya</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <ul>
                                        <li className='chevdown-text-left'>Pajak</li>
                                        <li className='chevdown-text-left'>Biaya Makan Sopir</li>
                                    </ul>
                                    <div>
                                        <p className='chevdown-text-right-2'>Termasuk</p>
                                        <p className='chevdown-text-right-2'>Termasuk</p>
                                    </div>
                                </div>

                                <div>
                                    <p className='fw-bold'>Belom Termasuk</p>
                                </div>
                                <div className='d-flex'>
                                    <ul>
                                        <li className='chevdown-text-left'>Bensin</li>
                                        <li className='chevdown-text-left'>Tol dan parkir</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between mb-5'>
                                    <p className='fw-bold'>Total</p>
                                    <p className='fs-6 fw-bold'>{formatToIdr(car.total_price)}</p>
                                </div>
                            </div>
                        }
                        <Link
                            onClick={handleClick}
                            className={`btn-paymain-right${selectBankTransfer ? '' : ' disabled'}`}
                            to={selectBankTransfer ? `/transfer/${id}?bank=${selectBankTransfer}` : '#'}
                        >
                            Bayar
                        </Link>
                    </div>
                    <div>
                        <p className='totalprice-payment'>{formatToIdr(car.total_price)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayMain;

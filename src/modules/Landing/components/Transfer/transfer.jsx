import './style.css'
import TransferLeft from './TransferLeft/transferleft'
import TransferRight from './TransferRight/transferright'

const Transfer = () => {
    return (
        <div className='transfer-wrapper'>
            <TransferLeft />
            <TransferRight />
        </div>
    );
}

export default Transfer;
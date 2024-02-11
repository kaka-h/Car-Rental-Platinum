import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, selectCountdown } from '../../features/countdownReducer/countdownSlice';
import './style.css'

const CountdownComponent = ({ timerKey }) => {
  const timer = useSelector((state) => selectCountdown(state)[timerKey]);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(decrement({ timerKey }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, timerKey]);

  return (
    <div>
      <div className='countdown-wrapper'>
        <div className='countdown-text'>{String(timer.hours).padStart(2, '0')}</div>
        <p>:</p>
        <div className='countdown-text'>{String(timer.minutes).padStart(2, '0')}</div>
        <p>:</p>
        <div className='countdown-text'>{String(timer.seconds).padStart(2, '0')}</div>
      </div>
    </div>
  );
};

export default CountdownComponent;

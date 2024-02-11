import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countdown24Hours: {
        hours: 24,
        minutes: 0,
        seconds: 0,
    },
    countdown10Minutes: {
        hours: 0,
        minutes: 10,
        seconds: 0,
    },
};

const countdownSlice = createSlice({
    name: 'countdown',
    initialState,
    reducers: {
        decrement: (state, action) => {
        const { timerKey } = action.payload;
        const timer = state[timerKey];

        if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
            return state;
        }

        if (timer.minutes === 0 && timer.seconds === 0) {
            timer.hours -= 1;
            timer.minutes = 59;
            timer.seconds = 59;
        } else if (timer.seconds === 0) {
            timer.minutes -= 1;
            timer.seconds = 59;
        } else {
            timer.seconds -= 1;
        }
        },
    },
});

export const { decrement } = countdownSlice.actions;
export const selectCountdown = (state) => state.countdown;
export default countdownSlice.reducer;

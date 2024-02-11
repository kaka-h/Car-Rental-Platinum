import { createSlice } from '@reduxjs/toolkit';

const bankSlice = createSlice({
  name: 'bank',
  reducers: {},
  initialState: {
    bca: {
      title: 'BCA',
      transfer: 'BCA Transfer',
      accountNumber: '12345678',
    },
    bni: {
      title: 'BNI',
      transfer: 'BNI Transfer',
      accountNumber: '11223344',
    },
    mandiri: {
      title: 'Mandiri',
      transfer: 'Mandiri Transfer',
      accountNumber: '87654321',
    },
  },
});

export const selectBank = (state) => state.bank;

export default bankSlice.reducer;

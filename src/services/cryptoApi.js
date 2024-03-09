// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': '15f57bb266mshe37d0824beb5441p11c887jsna42fb4b9d262',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }

// const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges"

// const createRequest = (url) => ({ url, headers :cryptoApiHeaders })
// export const cryptoApi = createApi({
//     reducerPath : 'cryptoApi',
//     baseQuery : fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//     getCryptos: builder.query({
//         query: (count) => createRequest(`/coins?limits=${count}`),
//     }),
//     getExchanges: builder.query({
//         query: (count) => createRequest(`/exchanges`)
//     }) ,
//     getCryptoDetails: builder.query({
//         query: (coinId) => createRequest(`/coin/${coinId}`),
//     }),
//     getCryptoDetailsQuery: builder.query({
//         query: ({})
//     }),
//     getCryptoHistory: builder.query({
//         query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
//     })
//     })
// })

// export const {
//     useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery ,useGetExchangesQuery
// } = cryptoApi;






// // const options = {
// //   method: 'GET',
// //   url: 'https://coinranking1.p.rapidapi.com/exchanges',
// //   headers: {
// //     'X-RapidAPI-Key': '15f57bb266mshe37d0824beb5441p11c887jsna42fb4b9d262',
// //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// //   }
// // };





import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
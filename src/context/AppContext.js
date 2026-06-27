// 'use client';

// import { createContext, useReducer, useContext } from 'react';

// // Reducer function to manage state updates
// export const AppReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_SHOW_SPLASH':
//       return {
//         ...state,
//         showSplash: action.payload.show,
//       };
//     case 'SET_DAFTAR_JAWABAN':
//       return {
//         ...state,
//         daftarJawaban: {
//           ...state.daftarJawaban,
//           [action.payload.questionId]: action.payload.jawabanTipe,
//         },
//       };
//     case 'RESET_DAFTAR_JAWABAN':
//       return {
//         ...state,
//         daftarJawaban: {},
//       };
//     default:
//       return state;
//   }
// };

// // Initial state for the context
// const initialState = {
//   daftarJawaban: {},
//   showSplash: true,
// };

// export const AppContext = createContext();

// // AppProvider component to wrap the application with the context
// export const AppProvider = (props) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   return (
//     <AppContext.Provider
//       value={{
//         dispatch,
//         daftarJawaban: state.daftarJawaban,
//         showSplash: state.showSplash,
//       }}
//     >
//       {props.children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };

// ========================================================================================================================

'use client'

import { createContext, useReducer, useContext } from 'react'

// Reducer function to manage state updates
export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHOW_SPLASH':
      return {
        ...state,
        showSplash: action.payload.show,
      }
    case 'SET_DAFTAR_JAWABAN':
      return {
        ...state,
        daftarJawaban: {
          ...state.daftarJawaban,
          [action.payload.questionId]: action.payload.jawabanTipe,
        },
      }
    case 'SET_NOMOR_PROLOG':
      return {
        ...state,
        nomorProlog: action.payload.nomorProlog
      }
    case 'SET_NOMOR_PERTANYAAN':
      return {
        ...state,
        nomorPertanyaan: action.payload.nomorPertanyaan
      }
    case 'RESET_DAFTAR_JAWABAN':
      return {
        ...state,
        daftarJawaban: {},
      }
    default:
      return state
  }
}

// Initial state for the context
const initialState = {
  daftarJawaban: {},
  showSplash: true,
  nomorProlog: 1,
  nomorPertanyaan: 1,
}

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider
      value={{
        dispatch,
        daftarJawaban: state.daftarJawaban,
        showSplash: state.showSplash,
        nomorProlog: state.nomorProlog,
        nomorPertanyaan: state.nomorPertanyaan,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

// ========================================================================================================================

// 'use client'

// import { createContext, useReducer } from 'react'

// export const AppReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_SHOW_SPLASH':
//       let show = action.payload.show
//       state.showSplash = show

//       action.type = 'DONE'
//       return {
//         ...state,
//       }
//     case 'SET_DAFTAR_JAWABAN':
//       let questionId = action.payload.questionId
//       let jawabanTipe = action.payload.jawabanTipe
//       state.daftarJawaban[questionId] = jawabanTipe

//       action.type = 'DONE'
//       return {
//         ...state,
//       }
//     case 'RESET_DAFTAR_JAWABAN':
//       state.daftarJawaban = {}

//       action.type = 'DONE'
//       return {
//         ...state,
//       }
//     default:
//       return state
//   }
// }

// const initialState = {
//   daftarJawaban: {},
//   showSplash: true,
// }

// export const AppContext = createContext()

// export const AppProvider = (props) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)

//   return (
//     <AppContext.Provider
//       value={{
//         dispatch,
//         daftarJawaban: state.daftarJawaban,
//         showSplash: state.showSplash,
//       }}
//     >
//       {props.children}
//     </AppContext.Provider>
//   )
// }

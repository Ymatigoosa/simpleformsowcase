import { ActionTypes } from 'actions/registration';
import { createReducer } from 'utils';

const initialState = {
  name: '',
  surname: '',
  profession: '',
  professionHintsAll: [
    'Парикмахер',
    'Парикмахер-Визажист',
    'Визажист-Парикмахер',
    'Визажист',
    'Программист'
  ],
  professionHints: [

  ],
  professionHintsOpen: false,
  phone: '',
  phoneNormalized: '',
  countriesWithCodes: {
    '7': {countryName: 'Россия', codeIso: 'ru', codePhone: '+7'},
    '1246': {countryName: 'Барбадос', codeIso: 'bb', codePhone: '+1246'},
    '1': {countryName: 'США', codeIso: 'us', codePhone: '+1'}
  },
  currentCountryCode: null,
  countrySelectedCodeOpen: false
};

export default createReducer(initialState, {
  [ActionTypes.NAME_CHANGED]: (state, action) => ({
    ...state,
    name: action.playload
  }),

  [ActionTypes.SURNAME_CHANGED]: (state, action) => ({
    ...state,
    surname: action.playload
  }),

  [ActionTypes.PROFESSION_CHANGED]: (state, action) => {
    const professionHints = action.playload.length > 0
      ? state.professionHintsAll.filter((i) => i.toLowerCase().indexOf(action.playload.toLowerCase()) >= 0)
      : [];
    return {
      ...state,
      profession: action.playload,
      professionHints: professionHints,
      professionHintsSelectedIndex: null,
      professionHintsOpen: true
    };
  },

  [ActionTypes.PHONE_CHANGED]: (state, action) => {
    const phone = action.playload;
    const normalized = phone.replace(/\D/g, '');
    const findedcountries = Object.keys(state.countriesWithCodes).filter((i) => normalized.startsWith(i));
    const countryid = findedcountries.length > 0
      ? findedcountries[findedcountries.length - 1]
      : null;
    return {
      ...state,
      phone: action.playload,
      phoneNormalized: normalized,
      currentCountryCode: countryid,
      currentCountrySelectedCode: countryid
    };
  },

  [ActionTypes.PROFESSION_HINT_SET_STATE]: (state, action) => {
    return {
      ...state,
      professionHintsOpen: action.playload
    };
  },

  [ActionTypes.PHONE_HINT_SET_STATE]: (state, action) => {
    return {
      ...state,
      countrySelectedCodeOpen: action.playload
    };
  }
});

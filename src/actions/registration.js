import { createActionTypes } from 'utils';

export const ActionTypes = createActionTypes('pages/registration/', {
  NAME_CHANGED: null,
  SURNAME_CHANGED: null,
  PROFESSION_CHANGED: null,
  PHONE_CHANGED: null,
  PROFESSION_HINT_INDEX_CHANGED: null,
  PHONE_HINT_INDEX_CHANGED: null,
  PROFESSION_HINT_SET_STATE: null,
  PHONE_HINT_SET_STATE: null
});

export const Actions = {
  changeName: (text) => ({
    type: ActionTypes.NAME_CHANGED,
    playload: text
  }),

  changeSurname: (text) => ({
    type: ActionTypes.SURNAME_CHANGED,
    playload: text
  }),

  changeProfession: (text) => ({
    type: ActionTypes.PROFESSION_CHANGED,
    playload: text
  }),

  changePhone: (text) => ({
    type: ActionTypes.PHONE_CHANGED,
    playload: text
  }),

  changeProfessionHintHighlightedItem: (index) => ({
    type: ActionTypes.PROFESSION_HINT_INDEX_CHANGED,
    playload: index
  }),

  changePhoneHintHighlightedItem: (code) => ({
    type: ActionTypes.PHONE_HINT_INDEX_CHANGED,
    playload: code
  }),

  togglePhoneHint: (isopen) => ({
    type: ActionTypes.PHONE_HINT_INDEX_CHANGED,
    playload: isopen
  }),

  togglePhoneHint: (isopen) => ({
    type: ActionTypes.PHONE_HINT_INDEX_CHANGED,
    playload: isopen
  })
};

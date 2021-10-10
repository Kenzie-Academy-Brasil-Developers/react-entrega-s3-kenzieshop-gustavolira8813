import thunk from "redux-thunk";

export const addProductThunk = (product) => {
  return (dispatch, getStore) => {
    //trabalho o store em questao, e mando pronto para o actions,
    //q por sua vez vai mandar apenas o type e os dados para o reducer apenas mudar o state
    const { product } = getStore();
    dispatch(addProductThunk(product));
  };
};

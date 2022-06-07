export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = { ...payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = [...state.order];
        newOrder[itemIndex].quantity++;
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case 'INC_QUANTITY': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      const incOrder = [...state.order];
      incOrder[itemIndex].quantity++;

      return {
        ...state,
        order: incOrder,
      };
    }
    case 'DEC_QUANTITY': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      const decOrder = [...state.order];
      const quantity = state.order[itemIndex].quantity;

      if (quantity > 0) {
        decOrder[itemIndex].quantity--;
      }

      return {
        ...state,
        order: decOrder,
      };
    }
    case 'HANDLE_BASKET_CLOSE':
      return {
        ...state,
        isShowBasket: false,
      };
    case 'HANDLE_BASKET_TOGGLE':
      return {
        ...state,
        isShowBasket: !state.isShowBasket,
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    default:
      return state;
  }
}

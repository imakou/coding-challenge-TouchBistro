import React, { createContext, useContext, useReducer } from "react";
import { QueryHistory } from "../model/model";

type StateType = {
  error: { message?: string };
  history: QueryHistory[];
};

type ActionType =
  | { type: "ADD_HISTORY"; payload: QueryHistory }
  | { type: "REMOVE_HISTORY"; payload: string }
  | { type: "ERROR"; payload: string }
  | { type: "RESET" };

type DispatchType = (action: ActionType) => void;

const StateDispatchContext = createContext<
  | {
      state: StateType;
      dispatch: DispatchType;
    }
  | undefined
>(undefined);

const initialState: StateType = {
  error: {},
  history: [],
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "ADD_HISTORY":
      return { ...state, history: [...state.history, action.payload] };
    case "REMOVE_HISTORY":
      return { ...state, history: state.history.filter(({ id }) => id !== action.payload) };
    case "ERROR":
      return {
        ...state,
        error: {
          message: action.payload,
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function useMedianNumberStateDispatch() {
  const context = useContext(StateDispatchContext);
  if (!context) {
    throw new Error("useMedianNumberStateDispatch must be used within a MedianNumberStateProvider component");
  }
  return context;
}

function MedianNumberStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StateDispatchContext.Provider value={value}>{children}</StateDispatchContext.Provider>;
}

export { MedianNumberStateProvider, useMedianNumberStateDispatch };

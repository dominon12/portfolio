import React, { createContext, useReducer } from "react";
import { getRandomId } from "../Services/HelperService";

/**
 * Defines available snackbar
 * message colors
 *
 * @export
 * @enum {number}
 */
export enum SnackBarMessageColor {
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  DANGER = "danger",
}

/**
 * Snackbar message representation
 *
 * @interface ISnackBarMessage
 */
interface ISnackBarMessage {
  id: number;
  text: string;
  color: SnackBarMessageColor;
  delay: number;
}

/**
 * Options of showing the
 * snackbar message
 *
 * @interface ISnackBarOptions
 */
interface ISnackBarOptions {
  color?: SnackBarMessageColor;
  delay?: number;
}

/**
 * State of the snackbar context
 *
 * @export
 * @interface SnackBarContextState
 */
export interface SnackBarContextState {
  sendMessage: (text: string, options?: ISnackBarOptions) => void;
  messages: ISnackBarMessage[];
}

const contextDefaultValues: SnackBarContextState = {
  sendMessage: (text: string, options?: ISnackBarOptions) => {},
  messages: [],
};

export const SnackBarContext =
  createContext<SnackBarContextState>(contextDefaultValues);

/**
 * Available snackbar actions
 *
 * @enum {number}
 */
enum SnackbarActionType {
  ADD_MESSAGE = "NEW_MESSAGE",
  REMOVE_MESSAGE = "REMOVE_MESSAGE",
}

/**
 * Reducer action representation
 *
 * @interface ISnackbarAction
 */
interface ISnackbarAction {
  type: SnackbarActionType;
  payload: any;
}

/**
 * Returns ready 'ADD_MESSAGE' snackbar action
 * for the snackbar reducer
 *
 * @param {ISnackBarMessage} message - message to display
 * @return {*}  {ISnackbarAction}
 */
const addMessage = (message: ISnackBarMessage): ISnackbarAction => ({
  type: SnackbarActionType.ADD_MESSAGE,
  payload: message,
});

/**
 * Returns ready 'REMOVE_MESSAGE' snackbar action
 * for the snackbar reducer
 *
 * @param {number} messageId
 * @return {*}  {ISnackbarAction}
 */
const removeMessage = (messageId: number): ISnackbarAction => ({
  type: SnackbarActionType.REMOVE_MESSAGE,
  payload: messageId,
});

/**
 * Controls messages state
 *
 * @param {ISnackBarMessage[]} state - current state
 * @param {ISnackbarAction} action - action to execute
 * @return {*}  {ISnackBarMessage[]} - state after action executing
 */
function snackbarReducer(
  state: ISnackBarMessage[],
  action: ISnackbarAction
): ISnackBarMessage[] {
  switch (action.type) {
    case SnackbarActionType.ADD_MESSAGE:
      return [...state, action.payload as ISnackBarMessage];
    case SnackbarActionType.REMOVE_MESSAGE:
      return state.filter((message) => message.id !== action.payload);
    default:
      return state;
  }
}

interface Props {
  defaultDelay?: number;
}

/**
 * Provides an API for communicating
 * with a user via snackbar messages.
 */
const SnackBarProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(snackbarReducer, []);

  /**
   * Adds a new message to the state and
   * removes it after some delay.
   *
   * @param {string} text - text of the message to display
   * @param {ISnackBarOptions} [options] - options of displaying a message
   */
  const sendMessage = (text: string, options?: ISnackBarOptions) => {
    const delay = options?.delay ?? props.defaultDelay ?? 2000;

    const newMessage = {
      id: getRandomId(),
      color: options?.color ?? SnackBarMessageColor.INFO,
      delay,
      text,
    };

    dispatch(addMessage(newMessage));

    setTimeout(() => {
      dispatch(removeMessage(newMessage.id));
    }, delay);
  };

  return (
    <SnackBarContext.Provider
      value={{
        sendMessage,
        messages: state,
      }}
    >
      {props.children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarProvider;

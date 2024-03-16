import Todo from "./todo";

export default interface TodoState {
  todoText: string;
  inValid: boolean | null;
  errMsg: string;
}

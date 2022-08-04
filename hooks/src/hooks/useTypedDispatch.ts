import {useDispatch} from "react-redux";
import {TypedDispatch} from "../store";

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
import axios from "axios";
import { MAIN_URL } from "../config";

export const instance = axios.create({
    baseURL: MAIN_URL,
});
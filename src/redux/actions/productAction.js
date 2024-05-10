import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from "../constants/productConstant";

import axios from "axios";
import { API_URL } from "../../apiServer";

// action creaters
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    const { data } = await axios.get(`${API_URL}`);
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_SINGLE_PRODUCT_REQUEST });
    const { data } = await axios.get(`${API_URL}/${id}`);
    dispatch({
      type: FETCH_SINGLE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SINGLE_PRODUCT_FAILURE,
      payload: error.message,
    });
  }
};

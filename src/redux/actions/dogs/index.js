import {
  ADD_DOG_REQUEST,
  ADD_DOG_SUCCESS,
  ADD_DOG_ERROR,
  FILL_DOGS_REQUEST,
  FILL_DOGS_SUCCESS,
  FILL_DOGS_ERROR,
} from "../../types/dogs";
import { DogsService } from "../../../services";

export const addDogRequest = (dog) => (dispatch) => {
  dispatch({ type: ADD_DOG_REQUEST });

  DogsService.create(dog).then((result) => {
    if (result.ok) {
      dispatch(addDogSuccess(result.data));
    } else {
      dispatch(addDogError(new Error("Não foi possível adicionar o cachorro")));
    }
  });
};

export const addDogSuccess = (dog) => ({
  type: ADD_DOG_SUCCESS,
  dog,
});

export const addDogError = (error) => ({
  type: ADD_DOG_ERROR,
  error,
});

export const fillDogsRequest = () => (dispatch) => {
  dispatch({ type: FILL_DOGS_REQUEST });

  setTimeout(() => {
    DogsService.getAll().then((result) => {
      if (result.ok) {
        dispatch(fillDogsSuccess(result.data.dogs));
      } else {
        dispatch(
          fillDogsError(new Error("Não foi possível buscar os cachorros"))
        )
      }
    })
  }, 3000)
};

export const fillDogsSuccess = (dogs) => ({
  type: FILL_DOGS_SUCCESS,
  dogs,
});

export const fillDogsError = (error) => ({
  type: FILL_DOGS_ERROR,
  error,
});

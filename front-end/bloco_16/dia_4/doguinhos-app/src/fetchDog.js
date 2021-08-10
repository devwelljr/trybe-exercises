import { requestDog, getImage, failedRequest } from './redux/actions';

export default function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random').then((r) =>
      r.json().then(
        (json) => dispatch(getImage(json)),
        (error) => dispatch(failedRequest(error))
      )
    );
  };
}

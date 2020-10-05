import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "./../../firebase/firebase.utils";

import {
  fetchcollectionsSuccess,
  fetchcollectionsFailure,
} from "./shop.actions";

export function* fetchcollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchcollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchcollectionsFailure(error));
  }
}

export function* fetchcollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchcollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchcollectionsStart)]);
}

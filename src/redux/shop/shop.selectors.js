import { createSelector } from "reselect";

//to get the url parameter we pass the id equivalent to url name

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [] //converts the keys of an object into array format
);

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParams] : null
  );

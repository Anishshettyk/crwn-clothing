import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchcollectionsStart } from "./../../redux/shop/shop.actions";

import CollectionPageConatiner from "./../collection/collection.container";
import CollectionOverviewContainer from "./../../components/collections-overview/collections-overview.container";
//match location and history is passed from the shop page route of app.js to shop.component page
const ShopPage = ({ fetchcollectionsStart, match }) => {
  useEffect(() => {
    fetchcollectionsStart();
  }, [fetchcollectionsStart]);
  //the array as a second argument means if fetchcollectionsStart changes then fire useEffect again.

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageConatiner}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchcollectionsStart: () => dispatch(fetchcollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

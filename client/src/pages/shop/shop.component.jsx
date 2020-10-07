import React, { useEffect, lazy, Suspense } from "react";
import Spinner from "./../../components/spinner/spinner.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchcollectionsStart } from "./../../redux/shop/shop.actions";

const CollectionPageConatiner = lazy(() =>
  import("./../collection/collection.container")
);
const CollectionOverviewContainer = lazy(() =>
  import(
    "./../../components/collections-overview/collections-overview.container"
  )
);

const ShopPage = ({ fetchcollectionsStart, match }) => {
  useEffect(() => {
    fetchcollectionsStart();
  }, [fetchcollectionsStart]);
  //the array as a second argument means if fetchcollectionsStart changes then fire useEffect again.

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageConatiner}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchcollectionsStart: () => dispatch(fetchcollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

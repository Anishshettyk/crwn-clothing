import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { fetchcollectionsStartAsync } from "./../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "./../../redux/shop/shop.selectors";

import withSpinner from "./../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = withSpinner(CollectionPage);
//match location and history is passed from the shop page route of app.js to shop.component page
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchcollectionsStartAsync } = this.props;
    fetchcollectionsStartAsync();
  }

  render() {
    const { match, iscollectionFetching, iscollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={iscollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={!iscollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  iscollectionFetching: selectIsCollectionFetching,
  iscollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchcollectionsStartAsync: () => dispatch(fetchcollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

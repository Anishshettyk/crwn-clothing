import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchcollectionsStartAsync } from "./../../redux/shop/shop.actions";

import CollectionPageConatiner from "./../collection/collection.container";
import CollectionOverviewContainer from "./../../components/collections-overview/collections-overview.container";
//match location and history is passed from the shop page route of app.js to shop.component page
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchcollectionsStartAsync } = this.props;
    fetchcollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchcollectionsStartAsync: () => dispatch(fetchcollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

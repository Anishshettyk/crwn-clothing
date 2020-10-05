import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "./../../redux/shop/shop.selectors";
import withSpinner from "./../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageConatiner = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);
//=>compose evalvates from right to left

export default CollectionPageConatiner;

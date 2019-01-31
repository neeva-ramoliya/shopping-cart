import React from "react";
import { connect } from "react-redux";
import {
  requestProducts,
  fetchProductList
} from "../../controllers/actions/index";
import NotificationManager from "../common/notification";
import Refresh from "@material-ui/icons/Refresh";

import Header from "./header";
import ProductList from "./productlist";
import Loader from "../common/loader";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(requestProducts());
    this.state = {
      notify: false
    };
    this.notify = this.notify.bind(this);
    this.tryAgainClick = this.tryAgainClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchProductList());
  }

  tryAgainClick() {
    this.props.dispatch(requestProducts());
    this.props.dispatch(fetchProductList());
  }

  notify(itemName) {
    this.setState({
      notify: true,
      message: `${itemName} added to cart`
    });
    setTimeout(() => {
      this.setState({
        notify: false
      });
    }, 1000);
  }

  render() {
    const { isLoading, errorInProductFetch } = this.props;
    const { notify, message } = this.state;
    return (
      <div>
        <Header />
        {isLoading && <Loader />}
        {!isLoading && <ProductList notify={this.notify} />}
        {errorInProductFetch && (
          <div
            className="try-again cursor-pointer"
            onClick={this.tryAgainClick}
          >
            Try Again <Refresh />
          </div>
        )}
        <NotificationManager show={notify} message={message} />
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    isLoading: state.isLoading,
    errorInProductFetch: state.errorInProductFetch
  };
};
export default connect(mapStoreToProps)(Listing);

import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import BasketEmptyIcon from "./icons/BasketEmptyIcon";
import BasketFullIcon from "./icons/BasketFullIcon";
import PropTypes from "prop-types";

const CartButton = ({ cartItems, tintColor }) => {
  if (cartItems && cartItems.length)
    return (
      <View>
        <BasketFullIcon color={tintColor} size={25} qy={cartItems.length} />
      </View>
    );
  return (
    <View>
      <BasketEmptyIcon color={tintColor} size={25} />
    </View>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.data
});

CartButton.propTypes = {
  cartItems: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  tintColor: PropTypes.string
};

export default connect(mapStateToProps)(CartButton);

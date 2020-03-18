import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature, updateTotal } from './actions/index';
import { connect } from 'react-redux';

const App = props => {
  

  const removeFeature = item => {
props.removeFeature(item);
props.updateTotal(-item.price)
  };

  const buyItem = item => {
props.addFeature(item);
props.updateTotal(item.price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures
        addFeature={props.addFeature}
        removeFeature={removeFeature}
        car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures 
        buyItem={buyItem}
        additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  updateTotal
})(App);

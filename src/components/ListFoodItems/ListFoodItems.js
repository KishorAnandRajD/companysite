import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFood as fetchFoodActionCreator } from '../../actions/FoodList/action_creators';
import Table from '../common/Table';
import Spinner from '../common/Spinner';
import Alert from '../common/Alert';

class ListFoodItems extends Component {
  componentDidMount(){
    console.log('inside componentDidMount of ListFoodItems this.props:', this.props);
    this.props.fetchFood();
  }
  
  render() {
    console.log('inside render of ListFoodItems this.props:', this.props);
    console.log('inside render of ListFoodItems this.props.error:', this.props.error);
    return (
      <div>
        { this.props.loading 
          ? 
          <Spinner /> 
          : 
          this.props.error ? <Alert errorMessage={this.props.error}/> :<Table tableData={this.props.data} colWidthPercentage={[10,60,15,10]}/> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.listFood.loading,
  data: state.listFood.data,
  error: state.listFood.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchFood: () => dispatch(fetchFoodActionCreator())
})

// function mapStateToProps(state) {
//   console.log('inside mapStateToProps state:', state);
//   return {listFood: state.listFood };
// }

export default connect(mapStateToProps, mapDispatchToProps) (ListFoodItems);
import { LOADING_FOOD } from '../actions/FoodList/action_types';
import { FETCH_FOOD } from '../actions/FoodList/action_types';
import { ERROR_FOOD } from '../actions/FoodList/action_types';
import { SEARCH_FETCH_FOOD } from '../actions/FoodList/action_types';

let stateValue={
    loading: false,
    data:{},
    dataCopyForSearch: {},
    error:''
};
export default function (state = stateValue, action) {
 
    console.log('inside foods_reducer state:', state);
    console.log('inside foods_reducer action:', action);
    console.log('inside foods_reducer stateValue:', stateValue);
    switch (action.type) {

        case LOADING_FOOD:
            console.log('Reducer LOADING_FOOD');
            return Object.assign({},state, {loading:true});
        case FETCH_FOOD:
            console.log('Reducer FETCH_FOOD:', action.payload);
            return Object.assign({},state, {loading:false, data:action.payload, dataCopyForSearch:action.payload});
        case ERROR_FOOD:
            console.log('Reducer ERROR_FOOD:', action.payload);
            return Object.assign({},state, {loading:false, data:action.payload});
        case SEARCH_FETCH_FOOD:
            console.log('Reducer SEARCH_FETCH_FOOD:', action.payload);
            return Object.assign({},state, {loading:false, data:action.payload });
        default:
            return state;
    }
}

// export default function (state = {}, action) {
    
//     let stateValue={
//         loading: false,
//         data:{},
//         error:''
//     };

//     console.log('inside foods_reducer state:', state);
//     console.log('inside foods_reducer action:', action);
//     console.log('inside foods_reducer stateValue:', stateValue);
//     switch (action.type) {

//         case LOADING_FOOD:
//             console.log('Reducer LOADING_FOOD');
//             stateValue.loading=true;
//             console.log('stateValue:', stateValue);
//             return stateValue;
//         case FETCH_FOOD:
//             console.log('Reducer FETCH_FOOD:', action.payload);
//             stateValue.loading=false;
//             stateValue.data=action.payload;
//             console.log('stateValue:', stateValue);
//             return stateValue;
//         case ERROR_FOOD:
//             console.log('Reducer ERROR_FOOD:', action.payload);
//             stateValue.loading=false;
//             stateValue.error=action.payload;
//             console.log('stateValue:', stateValue);
//             return stateValue;
//         // case FETCH_PRODUCT:
//         //     console.log(action.payload.data);
//         //     const post = action.payload.data;
//         //     return post;

//         // case CREATE_PRODUCT:
//         //     console.log('REducer CREATE_PRODUCT state:', state);
//         //     console.log('REducer CREATE_PRODUCT action.payload:', action.payload);
//         //     return [...state, action.payload];
        
//         // case UPDATE_PRODUCT:
//         // console.log('REducer CREATE_PRODUCT state:', state);
//         // console.log('REducer CREATE_PRODUCT action.payload:', action.payload);
//         // // state has full list of products. use filter to remove the matching one  from the array.
//         // let product = state.filter((val) => {return val.product_id !== action.payload.product_id })
//         // // Add the new updated value to the array
//         // return [...product, action.payload];

//         default:
//             return state;
//     }
// }

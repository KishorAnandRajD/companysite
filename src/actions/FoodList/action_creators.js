import * as actionTypes from './action_types';
import { createAction } from 'redux-actions';
import adapter from './adapter';

export const fetchFood = () => dispatch => {
    console.log('inside fetchFood Action Creator');
    dispatch(createAction(actionTypes.LOADING_FOOD)());
    fetch("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269")
        .then((resp) => resp.json())
        .then(function(data) {
            console.log('data:', data);
            dispatch(createAction(actionTypes.FETCH_FOOD)(adapter(data.report.foods))); // adapter to get only the required columns

        })
        .catch(function(error) {
            console.log(error);
            dispatch(createAction(actionTypes.ERROR_FOOD)(error));
        }); 
}

export const fetchFoodWithFilter = (data, payload) => dispatch => {
    console.log('inside fetchFoodWithFilter Action Creator payload:', payload);
    console.log('inside fetchFoodWithFilter Action Creator data:', data);
    //dispatch(createAction(actionTypes.LOADING_FOOD)());
    /**
     * Sample tested code for filter
     * const data=[{a:"Apple",b:"ball"},{a:"Cat",b:"Dog"},{a:"Eagle",b:"flip"},{a:"George",b:"Hall"},{a:"India",b:"Jackal"}
        ,{a:"Kangaroo",b:"Lollipop"}];
        const payload="Jackal";

        const filterData=data.filter((record)=>{
        console.log('record:', record);
        return (record.a===payload || record.b===payload);  // Equals Search
        // return (record.a.includes(payload) || record.b.includes(payload));  // Contains search
        }
        )
        console.log('filterData:', filterData);
     */
    const filterData=data.filter((record)=>{       
        return (record.ndbno.includes(payload) || record.name.includes(payload) 
            || record.measure.includes(payload) || record.weight===parseFloat(payload));  // Contains search
    })
    console.log('inside fetchFoodWithFilter Action Creator filterData:', filterData);
    dispatch(createAction(actionTypes.SEARCH_FETCH_FOOD)(filterData)); 
    // fetch("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269")
    //     .then((resp) => resp.json())
    //     .then(function(data) {
    //         console.log('data:', data);
    //         dispatch(createAction(actionTypes.FETCH_FOOD)(adapter(data.report.foods))); // adapter to get only the required columns

    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //         dispatch(createAction(actionTypes.ERROR_FOOD)(error));
    //     }); 
}
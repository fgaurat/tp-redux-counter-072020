import { connect } from 'react-redux'

import {Counter} from './Counter'


const mapStateToProps = (state) => ({
    cpt:state.count
})
const mapDispatchToProps = (dispatch) =>{

    return {
        inc: () =>{
            dispatch({type:'INCREMENT'})
        },
        dec: () =>{
            dispatch({type:'DECREMENT'})
        }

    }
}




const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter)

export default CounterContainer;
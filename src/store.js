

const initCpt = {count:3}



export const reducerCount = (state=initCpt,action)=>{
    console.log(state,action)
    let newState = {...state}

    switch(action.type){
        case 'INCREMENT':
            newState.count++
            break
        case 'DECREMENT':
            newState.count--
            break
    }


    return newState
}
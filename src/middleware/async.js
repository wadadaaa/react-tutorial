export default function ({ dispatch }) {
    return next => action => {
        if(!action.payload || !action.payload.then){
            next(action)
            return
        }
        action.payload.then(
            responseData => {
                const newAction = {...action, payload: responseData}
                dispatch(newAction)
            }
        )      
    }
}
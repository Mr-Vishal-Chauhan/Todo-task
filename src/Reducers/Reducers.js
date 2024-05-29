const initialData = {
    data:[]
}

const Reducers = (state=initialData, action)=>{
    switch(action.type){
        case"add":

        const{id,data} = action.payload;
        return{
            ...state,
            list:[
                ...state.list,
                {
                 id:id,
                 data:data
            }]
        }
        default:return state;
    }

}

export default Reducers;
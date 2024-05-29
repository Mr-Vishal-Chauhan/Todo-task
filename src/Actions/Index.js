export const add=(data)=>{
    return{
        type:"add",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const del=()=>{
    return{
        type:"del"
    }
}
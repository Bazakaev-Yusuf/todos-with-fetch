export const LoadTodos = () => {
   return (dispatch) => {
      dispatch({type: 'todos/loading'})
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(json => {
            dispatch({
               type : 'todos/item',
               payload : json
            })}
         )
   }
}

export const Delete = (id) => {
   return (dispatch) => {
      dispatch({
         type: 'todos/delete',
         payload: id
      })
   }
}
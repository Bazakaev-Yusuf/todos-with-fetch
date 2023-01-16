import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadTodos, Delete } from "./action";


function App(){

   const todos = useSelector(state => state.todos);
   const loading = useSelector(state => state.loading);
   const [show, setShow] = useState(true)

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(LoadTodos())
   }, [dispatch]);

   const showIt = () => {
      setShow(false)
   }

   const deleteTodo = (id) => {
      dispatch(Delete(id))
   }


   return (
      <div className="container">
         {loading ? 
         <div className="loading">
            <h1>Загружаю брат...</h1>
         </div>
          : show ? 
         <div>
            <div className="loading">
               <h1>Загрузка данных завершена!!!</h1>
               <button className="btn-show" onClick={() => showIt()}>PRESS HERE</button>
            </div>
         </div>
         :
         <div className="todos">
            <h1>Todos list</h1>
            <ol className="list-group">
               {todos.map((item, idx) => {
               return(
                  <li key={item.id} className='list list-group-item d-flex '>
                     <div>
                        {idx + 1}) {item.title}
                     </div>
                     <button onClick={() => deleteTodo(item.id)} className="remove-btn"></button>
                  </li>
               )
               })}
            </ol>
         </div>
         }
      </div>
   )
}
export default App;
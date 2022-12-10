import {useQuery} from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'
import { TodoItem } from "./components/TodoItem";
import readTodosRequest from './api/readTodosRequest'


function App() {
  const {isLoading, data: todos} = useQuery(
    'todos',
     readTodosRequest
     ); 

  return (
    <div className="py-8 text-white text-center">
      <h1 className='text-white font-bold text-2xl p-4'>ToDoIst</h1>
      {isLoading ? (
        <ClipLoader size={150}/>
      ) : (
          todos.map((todo) => (
            <TodoItem todo={todo} key={todo._id}/>
          ))
      )
      }
    </div>
  );
}

export default App;
  
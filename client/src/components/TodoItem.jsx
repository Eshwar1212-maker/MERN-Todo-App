import React from "react";
import { QueryClient, useQueryClient, useMutation } from "react-query";
import deleteTodoRequest from "../api/deleteTodoRequest";
import updateTodoRequest from "../api/updateTodoRequest";

export const TodoItem = ({ todo }) => {
  const queryClient = new useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => deleteTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return (
    <div className="text-white text-center">
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <input
        className="text-black"
        type="text"
        value={todo.text}
        onChange={(e) =>
          updateTodo({
            ...todo,
            text: e.target.value,
          })
        }
      />
      <button onClick={() => deleteTodo(todo)}>X</button>
    </div>
  );
};

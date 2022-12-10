const API_URL = `http://localhost:5000`

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MDUyMzIxNH0.3Y2g294YmcBNTTbrt7aMWjDG3cVYVWr5j0k9PQlR1zE"

export default (todo) => {
  return fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(
        {
            text: todo.text,
            completed: todo.completed
        }
    )
  })
    .then(response => response.json())
}
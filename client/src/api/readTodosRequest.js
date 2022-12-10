const API_URL = `http://localhost:5000`

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MDUyMzIxNH0.3Y2g294YmcBNTTbrt7aMWjDG3cVYVWr5j0k9PQlR1zE"

export default () => {
  return fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  })
    .then(response => response.json())
}
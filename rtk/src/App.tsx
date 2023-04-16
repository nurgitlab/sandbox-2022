import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}

      {users.map(user =>
        <div style={{marginBottom: '10px'}} key={user.id}>
          <div>
            Name: {user.name}
          </div>
          <div>
            Email: {user.email}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

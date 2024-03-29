import {useEffect, useState, useTransition} from "react";
import {Comments} from "./Comments";

import axios from "axios";
import {Mem} from "./Mem";
import {Call} from "./Call";
import {ErrorBoundary} from "./ErrorBoundry/ErrorBoundary";
import {LazyLoading} from "./LazyLoading/LazyLoading";

const filterComments = (comments, str) => {
  return comments.filter(comment => comment.name.concat(comment.body).includes(str))
}

function App() {
  const [isPending, startTransition] = useTransition()
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    axios.get('http://jsonplaceholder.typicode.com/comments').then((res) => {
      setComments(res.data)
    })
  }, [])

  const find = (e) => {
    startTransition(() => {
      setSearch(e.target.value)
    })
  }

  return (
    <div className="App">
      {/*<input onChange={find}/>*/}
      {/*{isPending && <h1>Rendering 3!</h1>}*/}
      {/*<Comments comments={filterComments(comments, search)} />*/}

      {/*<Mem/>*/}
      {/*<ErrorBoundary>*/}
      {/*  <Call />*/}
      {/*</ErrorBoundary>*/}

      <LazyLoading />
    </div>
  );
}

export default App;

import {lazy, useState, Suspense} from "react"

const LazyComp = lazy(() => import( "./LazyComp"))

export const LazyLoading = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      This is Lazy Loading
      <button onClick={() => setShow(true)}>Загрузить</button>
      <div>
        {show &&
          (<Suspense fallback={<div>Ожидание...</div>}>
            <LazyComp/>
          </Suspense>)
        }
      </div>
    </div>
  )
}
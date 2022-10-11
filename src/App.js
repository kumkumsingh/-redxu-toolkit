import './App.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from "./redux/features/postSlice"

function App() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post && state.post)

  useEffect(() => {
    dispatch(getPosts());
  }, [])
  if(loading){
    return <h2>...loading</h2>
  }
  return (
    <div className="App">
      {posts && posts.length && posts.map((item) => {
        return <div key={item.id}>{item.title}</div>
      })}
    </div>
  );
}

export default App;

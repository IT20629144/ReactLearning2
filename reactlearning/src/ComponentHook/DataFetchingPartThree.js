import React ,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingPartThree() {

    const [post,setPost] = useState({})
    const [id , setId] = useState(1)
    const [idFromButtonClick , setIdFromButtonClick] = useState(1)

    useEffect(() => {

        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => {
               console.log(res)
               setPost(res.data)
          })
          .catch(err => {
                console.log(err)
          })
    },[idFromButtonClick])

    const clickHandler = () => {

         setIdFromButtonClick(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={clickHandler}>Fetch click</button><br/>
        
        {post.title}
    </div>
          
  )
}

export default DataFetchingPartThree

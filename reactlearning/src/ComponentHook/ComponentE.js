// import React from 'react'
// import ComponentF from './ComponentF'

// function ComponentE() {
//   return (
//     <div>
//         <ComponentF/>
//     </div>
//   )
// }

// export default ComponentE

import React ,{useContext} from 'react'
import { UserContext ,ChannelContext} from '../App'


function ComponentF() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {channel}
       
    </div>
  )
}

export default ComponentF
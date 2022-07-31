// import React from 'react'
// import { UserContext } from '../App'


// function ComponentF() {
//   return (
//     <div>
        
//             <UserContext.Consumer>
//               {
//                 user => {
//                     return <div>User Context value {user}</div>
//                 }
//               }
//             </UserContext.Consumer>
       
//     </div>
//   )
// }

// export default ComponentF


import React from 'react'
import { UserContext } from '../App'
import { ChannelContext } from '../App'


function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return (
                                        <div>
                                            User Context value {user} , Channel Context Value {channel}
                                        </div>
                                    )
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
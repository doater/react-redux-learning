import React from 'react'
import { Link } from 'react-router'

const MsgView=({children})=>(
    <div>
        <div style={{backgroundColor:'red',width:'500px',height:'500px'}}>
            {children}
        </div>
    </div>
)

export default MsgView
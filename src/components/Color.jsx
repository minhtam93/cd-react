// import { useState } from 'react'
import styled from 'styled-components'

const ColorWrap = styled.div `
    width: 200px;
    height: 200px;
    margin: 100px;
    background: green;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center; 
`

// const Colora = (color,background) => {
//    return <div style={color,background}>Hi</div>
// }

// const [background,setBackGround] = useState()

export default function Color({color,width,background}) {
    const onClick =(e)=> {
        console.log('hi')
    }
    
    return(
        <ColorWrap className='color-wrap' style={{color,width,background}}>
           Color
           <button 
                onClick={onClick}> View
            </button>
        </ColorWrap>
    )
}
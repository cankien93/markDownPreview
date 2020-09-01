import React, {useState} from 'react';

import styled, {css}  from 'styled-components';

import ReactMarkdown from 'react-markdown';
import icon from '../../expand-arrows-interface-symbol.png'
const PreviewContainerBox = styled.div`
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    min-height: 60vh;
    box-shadow: 1px 1px 10px 2px #3a5f5f;
    ${props=>props.size==='big' && css`
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 98vh;
        background-color: white
    `}
`
const PreviewHeader = styled.div`
    background-color: #fa78c4;
    background-color: 100%;
    display: flex;
    justify-content: space-between;
`
const PreviewBox = styled.div`
    width: 99%;
    min-height: 250px;
    ${props=>props.size==='big' && css`
        height: 85vh
    `}
`
const ExpandIcon = styled.img`
    height: 2%;
    width: 2%;
    
`
const Preview = ({input}) => {
    const [state, setState] = useState({PreviewSize: 'small'});

    const changeSize = () =>{
        if(state.PreviewSize==='small'){
            setState({...state, PreviewSize: 'big'})
        }else{
            setState({...state, PreviewSize: 'small'})           
        }
    }

    return(
        <PreviewContainerBox size={state.PreviewSize}>
            <PreviewHeader>
                <div>Preview</div>
                <ExpandIcon src={icon} alt='icon'  onClick={changeSize}/>
            </PreviewHeader>
            <PreviewBox size={state.PreviewSize}>
                <ReactMarkdown source={input}/>
            </PreviewBox>           
        </PreviewContainerBox>
    )
}

export default Preview;
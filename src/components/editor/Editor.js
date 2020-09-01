import React, {useState} from 'react';
import styled from 'styled-components';

const EditorBox = styled.textarea`
    box-shadow: 1px 1px 10px 2px #3a5f5f;
    width: 99%;
    height: 88%
`
const MarkDownBox = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    width: ${props=>props.width};
    height: ${props=>props.height}
`
const EditorHeader = styled.div`
    background-color: #fa78c4;
    background-color: 100%;
    display: flex;
    justify-content: space-between;
`

const Editor = ({onChange, input}) => {
    const [state, setState] = useState({width: '50vw', height: '250px'});

    const changeSize = () =>{
        if(state.width==='50vw'){
            setState({...state, width: '97vw', height:'90vh'})
        }else{
            setState({...state, width: '50vw', height:'250px'})           
        }
        console.log(state)
    }

    return(
        <MarkDownBox height={state.height} width={state.width}>
            <EditorHeader >
                <div>Editor</div>
                <button onClick={changeSize} >x</button>
            </EditorHeader>
            <EditorBox 
                height={state.height} 
                onChange={event=>onChange(event)} 
                value={input}>
            </EditorBox>           
        </MarkDownBox>
    )
}

export default Editor;
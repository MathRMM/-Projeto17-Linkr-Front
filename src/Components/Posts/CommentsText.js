 import  { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Context from "../../Context";
import {API} from '../../Services/API.js'



export default function CommentText ({commentOpen, setCommentOpen, postId}){
    
    const [user] = useContext(Context);
    const [commentary, setCommentary] = useState('')

    
        
     
    function enviarNovoComentario(event){
        event.preventDefault();
        
        
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios.post(`${API}/comment/${postId}`, {   
            commentary
        },config).then(res =>{
            alert('deu certo')
            console.log(res)
            
        }).catch(res=>{
            console.log(res)
            if(res.response.status === 401) {
                
                alert('Faça login novamente')
            }
            else if(res.response.status === 404){
                
                alert('O post não existe')
            }
            else{
                alert('Não foi possível comentar no post')
            }
             
        })
    }
        
        
        
    return (
        <>
            <Imput>
            <form  onSubmit={enviarNovoComentario}>
            <input type="text" placeholder='Comment...' value={commentary} required onChange={e => setCommentary(e.target.value)} />
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={enviarNovoComentario}>
              <path d="M13.8268 0.620432C13.7341 0.543491 13.6215 0.49447 13.502 0.479084C13.3826 0.463697 13.2612 0.482578 13.152 0.533526L0.0546875 6.68115V7.87071L5.55584 10.0712L9.08447 15.4999H10.2743L14.0337 1.26865C14.0641 1.1521 14.0609 1.0293 14.0242 0.914532C13.9876 0.799768 13.9191 0.697774 13.8268 0.620432ZM9.53969 14.3653L6.50666 9.69896L11.1739 4.58703L10.4355 3.91278L5.73166 9.06456L1.19594 7.25028L12.866 1.7724L9.53969 14.3653Z" fill="#F3F3F3"/>
              </svg>
            </form>
            </Imput>

        </>
    )
}

const Imput = styled.div`
    width: 57.4rem;
    height: auto;
    
    form{
        width: 100%;
       
       
       
       position: relative;
       
       svg{
        position: absolute;
        right: 1rem;
        top: 2rem;
       }
        input{
            width: 100%;
            height: 4rem;
            color: gray;
            margin-bottom: 1.5rem;
            
            background-color: #252525;
            
            border: solid #252525 1px;
            border-radius: 6px;
            
        }
        input::placeholder{
            color :#D4D4D4;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    
`


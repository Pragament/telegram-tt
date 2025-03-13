     import { useParams } from 'react-router-dom';
import App from '../App';
import React, { useEffect, useLayoutEffect, useState} from '../../lib/teact/teact';


     const GroupChat = () => {
       const { group_id } = useParams();
       const gettelegramgroupidi = async(group_id: any) =>{
        console.log(group_id,)
        fetch(`http://e.me/${group_id}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Accept:"application/json",
            }
        }).then((res)=>{
            res.json()
        }).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
       }

       return (
         <div>
           <h1>Group Chat: {group_id}</h1>
           {/* Embed Telegram Chat for the group */}
           <iframe
             src={`https://t.me/${group_id}`}
             width="100%"
             height="600px"
           ></iframe>
         </div>
       );
     };

     export default GroupChat;
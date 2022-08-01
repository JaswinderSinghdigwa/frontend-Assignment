import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Input } from "@mui/material";
import axios from "axios";


const Form = (props) => {
  const update = async () => {
    await axios.get('http://localhost:3000/getform')
    .then(res=>{
      console.log("update",res)
      return res
    }).catch(err=>{
      return err
    })
  }
    const deleteData = async (id) => {
      await axios.get(`http://localhost:3000/getform/${id}`)
      .then(res=>{
        console.log("update",res)
        return res
      }).catch(err=>{
        return err
      })
  };
  return (
    <div style={{display: "flex", flexDirection: "row",justifyContent:"center", flexWrap: "wrap"}}>
      {props.list &&
        props.list.map((each) => {
          return (
            <div key={each._id}>
              <Box item lg={3} style={{marginRight: "18px", marginTop:"100px", marginBottom:"100px" , marginLeft:"18px"}}>
            <Card style={{width:"300px" , background: '#252525',
         color:'white'}}>
            <Input>
            <div style={{display: "grid", background: 'blue',
         color:'white'}}>
             <span>{each.heading}</span>
              <span>
               {each.description} 
              {each.comments} 
              </span>
            </div>
            </Input>
            <Box>
                <h4>comments</h4>
               <span>{each.comments}</span> 
            </Box>
            </Card>
            </Box>
            <button onClick={update(each._id)}>UpdateNotes</button>
            <button OnCLick={deleteData(each._id)}>DeleteNote</button>
            </div>
          );
        })}
    </div>
  );
};

export default Form;
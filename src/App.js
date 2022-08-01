import './App.css';
import React ,{useEffect, useState} from 'react'
import axios from "axios";
import Form from './form'
import { Checkbox } from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  const [heading,setHeading] = useState('');
  const [description,setDescription] = useState('');
  const [completed,setCheck] = useState()
  const [comments,setComments]=useState('');
  let myStyle={
    margin: 'auto auto'
  }
  const getNotes = async () => {
    await axios.get('http://localhost:3000/getform')
    .then(res=>{
      setData(res.data);
      return res
    }).catch(err=>{
      console.log("err",err);
      return err
    })
  };
  
  useEffect(() => {
    getNotes();
  }, []);

 const Create = async ()=>{
  let obj={
    heading,description,completed,comments
  }
  await axios.post('http://localhost:3000/form',obj)
    .then(res=>{
      console.log("res",res);
      return res
    }).catch(err=>{
      console.log("err",err);
      return err
    })
 }
  return (
    <>
    <Form list={data}></Form>
    <div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"></input>
    </div>
  </form>
</div>
    </>
  );
}

export default App;

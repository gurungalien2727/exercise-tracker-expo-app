import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Text} from 'react-native';
import Constants from "expo-constants";

const { manifest } = Constants;


const ExerciseList = () =>{
    const uri = `http://${manifest.debuggerHost.split(':').shift()}:4000/users`;
    console.log('Inside exercise list component')
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        console.log('Inside useEffect hook')
     fetch(uri)
     .then(res => res.json())
     .then(data => console.log(data))
    },[])
 return (
    <>
    <Text>ExerciseList</Text>
    </>
)
}
export default ExerciseList;
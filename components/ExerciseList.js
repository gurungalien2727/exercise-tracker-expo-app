import React,{useState,useEffect} from 'react';
import {Text} from 'react-native';
import Constants from "expo-constants";

const { manifest } = Constants;


const ExerciseList = () =>{
    const [exericses, setExercises] = useState([]);
    const uri = `http://${manifest.debuggerHost.split(':').shift()}:4000/exercises`;

    useEffect(()=>{
    
     fetch(uri)
     .then(res => res.json())
     .then(d => {
         console.log(d)
         setExercises(d)
     }
         )
    },[])
 return (
    <>
    <Text>ExerciseList test</Text>
    {
        exericses.map(e =>{
            return (<>
            <Text>{e.username} ||  {e.description} || {e.duration} || {e.date}</Text>
            </>)
        })
    }
    </>
)
}
export default ExerciseList;
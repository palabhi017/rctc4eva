import React from 'react'
import axios from "axios"
import { SUser, User } from '@/utils/types'
import {Heading,Text,Box} from "@chakra-ui/react"
import Todocard from '@/Components/Todocard'

const SingleUser = ({singleUser,id}:{singleUser:SUser[],id:number}) => {
    
  return (
    <>
     <Heading textAlign={"center"}>UserId:-{id}</Heading>
    <Text textAlign={"center"} fontSize="25px">Todos Data</Text>
    <Box m="auto" w="40%">
        {singleUser.length && singleUser.map((e)=> <Todocard key={e.id} {...e}/>)}
    </Box>
    </>
   
  )
}

export async function getStaticPaths(){
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    let data = res.data
    return {
        paths: data.map((e:User)=>({params:{id: String(e.id)}})) ,
        
        fallback: false
    }
}
export async function getStaticProps(context: { params: { id: number } }){
   let id = context.params.id
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    let data = res.data
    return {
        props:{
            singleUser:data,
            id:id
        },
    }
}

export default SingleUser
import React from 'react'
import axios from "axios"
import { User } from '@/utils/types'
import {AxiosResponse}from "axios"
import {Flex} from "@chakra-ui/react"
import Cards from '@/Components/Cards'


const Index = ({people}:{people:User[]}) => {
    
  return (
    <Flex w="80%" m="auto" flexWrap={"wrap"} gap="30px" mt="30px">
        {people.length && people.map((e:User)=> <Cards key={e.id} userdata={e}/>)}
    </Flex>
  )
}

export async function getStaticProps(){
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    let data = res.data
  
    return {
        props:{
            people: data,
            

        }
    }
}

export default Index
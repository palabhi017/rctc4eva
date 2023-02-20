import React from 'react'
import {Box,VStack,Avatar,Text,Button} from "@chakra-ui/react"
import { Card, User } from '@/utils/types'
import { useRouter } from 'next/router'

const Cards = ({userdata}:{userdata:any}) => {
    const {id,name,username}:Card = userdata
  const router = useRouter()


  return (
    <VStack w="20%" h="auto" p="30px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" gap="5px">
       
       <Avatar name={name} src='https://bit.ly/tioluwani-kolawole' />
       <Text>{name}</Text>
       <Text>{username}</Text>
       <Button onClick={()=>{
           router.push(`/people/${id}`)
         }}>Get Todos</Button>
    </VStack>
  )
}

export default Cards
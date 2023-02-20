import { Todo } from '@/utils/types'
import React from 'react'
import {Box,Text} from "@chakra-ui/react"
import {CheckCircleIcon,SmallCloseIcon} from "@chakra-ui/icons"

const Todocard = ({id,title,completed}:Todo) => {
  return (
    <Box h="auto" textAlign={"left"} p="10px" mt="10px" w="90%" borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Text>{completed? <CheckCircleIcon color="green"/>: <SmallCloseIcon color="red"/>}{"  "}{title}</Text>
    </Box>
  )
}

export default Todocard
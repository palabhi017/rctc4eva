import React from 'react'
import {Box,Flex,Button} from "@chakra-ui/react"
import Link from 'next/link'
import {MoonIcon} from "@chakra-ui/icons"
const Navbar = () => {
  return (
    <>
      <Flex h="60px" bgColor="#83bcff" justifyContent={"space-between"} p="20px">
         <Box fontWeight={"bold"} textAlign={"center"}>
            <Link href={"/people"}>People</Link>
         </Box>
         <Button w="30px" >
            <MoonIcon/>
         </Button>
      </Flex>
    </>
  )
}

export default Navbar
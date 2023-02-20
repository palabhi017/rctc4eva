export interface User{
 id:number,
 name:string,
 username:string,
 email:string,
 address: Address
 phone:string,
 website:string,
 company:{
    name:string,
    catchPhrase:string,
    bs:string
 }
}

export interface Address{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:Geo
}

export interface Geo{
    lat:string,
    lng:string
}

export interface Card{
    id:number
    name:string,
    username:string
}

export interface SUser{
userId:number,
id:number,
title:string,
completed:boolean
}

export interface Todo{
    id:number,
    title:string,
    completed:boolean
}
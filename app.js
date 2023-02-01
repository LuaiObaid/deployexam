require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


console.log('hello')
app.listen(3000, ()=>console.log('i am running in port 3000'))
import {Express} from "express";
import express = require("express");

const app: Express =  express();

app.listen(1337, ()=> {
    console.log("App is running")
})
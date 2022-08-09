/** بسم الله الرحمن الرحيم */
import { useState, useEffect } from 'react'
import axios from 'axios'
import PromisePolyfill from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = PromisePolyfill
}
const useNotes =(url)=>{
    const [notes,setNotes]= useState([])
    useEffect( async ()=>{
        const res = await axios.get(url)
        setNotes(res.data)
    },[url])
    return notes
}
const hooks = {useNotes}
export default hooks
import { useEffect, useState } from "react"

export const useQuery = (promise,depenecyList = []) => {
    const [data,setData] = useState({})
    useEffect(() => {
        promise().then((res) => {
            setData(res.data)
        })
    }, depenecyList)
    
    return data
}
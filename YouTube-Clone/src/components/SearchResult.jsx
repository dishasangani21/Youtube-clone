import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import {Context} from '../context/contextApi'
import LeftNav from './LeftNav'
import SearchResultVideoCard from './SearchResultVideoCard'
import { fetchDataFromApi } from '../utils/api'

const SearchResult = () => {
  const [results , setResults] = useState()
  const {searchQuery} = useParams()
  const {setLoading}  = useContext(Context)

  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
    fetchSearchResults()
  // eslint-disable-next-line no-use-before-define
  },[fetchSearchResults, searchQuery])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSearchResults = ()=>{
    setLoading(true)
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
      // console.log(res)
      setResults(res.contents)
      setLoading(false)
    })
  }

  return (
    <div className=' flex flex-row h-[calc(100%-56px)]' >

      <LeftNav/>

      <div className=' grow w-[calc(100%-240px)]  h-full overflow-y-auto bg-black'>
        <div className=' grid grid-cols-1 gap-2 p-5'>
          {
            results?.map((item)=>{
              if(item.type !== 'video') return false
              let video = item?.video
              return(
                <SearchResultVideoCard video={video} />
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default SearchResult

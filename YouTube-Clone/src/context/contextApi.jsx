// eslint-disable-next-line no-unused-vars
import react , {createContext , useEffect , useState} from 'react'
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext()

export const AppContext = (props)=>{
    const [loading , setLoading] = useState(false)
    const [searchResults , setSearchResults] = useState([])
    const [selectCategories , setSelectCategories] = useState("New")
    const [mobileMenu , setMobileMenu] = useState(false)

    useEffect(()=>{
            fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData = async(query)=>{
            setLoading(true)
            await fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
                // console.log(contents)
                setSearchResults(contents)
                setLoading(false)
            })
    }
    
    return(
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu
            }} 
        >
            { props.children }
        </Context.Provider>
    )
}
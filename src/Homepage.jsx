import Navbar from "./Components/Navbar"
import React, {useEffect, useState} from "react"
import fetch from "node-fetch"
import Loader from "./Components/Loader"
import ImageTile from "./Components/ImageTile"

export default function Homepage() {

    let [data, setData] = useState(null)

    let fetchData = async (keyword) =>{

      setData(null)

      let res  = await fetch(`https://api.pexels.com/v1/search?query=${keyword}`,{
        headers: {
          "Authorization": "563492ad6f91700001000001641a6b4e4f3e4d738cb47954326bdf21"
        }
      })

      let data = await res.json()


      setData(data);
    }
    useEffect(() => {
        fetchData("Landscape")
    }, [])

  return (
    <div>
        <Navbar fetchData={fetchData}/>
        {data == null ? <Loader /> : ( <div style={{display: 'flex', flexWrap:"wrap", justifyContent:"center"}}>
              {data.photos.map(ele => {
                return <ImageTile imageSrc={ele.src.medium} />
              })}
          </div> )}
        </div>
  );
}

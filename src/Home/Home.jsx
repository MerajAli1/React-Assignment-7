import axios from 'axios'
import { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import "../App.css"
import { Stack } from '@mui/material'
import { TextFields } from '@mui/icons-material'

const Home = () => {
  const [showData, setShowData] = useState([])
  const [addToCart, setAddToCart] = useState(0)
  const [loading, setloading] = useState(true)
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])

  //FOR ADD TO CART
  const cart = () => {
    setAddToCart((prev) => prev + 1)
    console.log(addToCart)
  }
  //FOR ADD TO CART

  //FETCHING DATA FROM API
  const getData = async (value) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/")
      setShowData(response.data)
      let results = response.data.filter((user) => {
        return value && user && user.title && user.title.toLowerCase().includes(value)
      })
      // console.log(response.data);
      setResult(results);
      setloading(false)
    } catch (error) {
      console.log("ERROR: " + error)
    }
  }
  const handleChange = (value) => {
    setInput(value)
    getData(value)
  }
  useEffect(() => {
    setloading(true)
    getData()

  }, [])



  //FETCHING DATA FROM API
  return (
    <>
      {loading ? <LoadingScreen /> :
        <div>
          <nav>
            <ul>
              <li>FAKE API STORE</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          <div>
            <Stack>
            </Stack>
            <Stack sx={{ width: "50%", margin: "20px auto" }}>
              <input style={{ padding: "10px" }} placeholder='Search' type="text" value={input} onChange={(e) => handleChange(e.target.value)} />
            </Stack>
            <Stack sx={{ width: "50%", margin: "20px auto" }}>
              {
                result.map((e, i) => {
                  return <>
                    <div style={{ backgroundColor: "#eeeeee", padding: "10px", borderRadius: "5px", marginTop: "10px" }} key={i}>
                      {e.title}
                    </div>
                  </>
                })
              }

            </Stack>

          </div>
          <div className="mainContainer" >
            {
              result.map((e, i) => {
                return (
                  <div className="parentCard" key={i}>
                    <section className="card" >
                      <img className='productImg' width="50%" src="https://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-12.png" alt="Not Found" />
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                      <h5>Rating: {e.rating.rate}</h5>
                      <h1>${e.price}</h1>
                      <button onClick={cart} className="btn">Add to cart</button>
                    </section>
                  </div>
                )
              })
            }
          </div>

        </div>}
    </>
  )
}

export default Home
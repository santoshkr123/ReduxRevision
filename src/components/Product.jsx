import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import  {storeProduct} from '../redux/slice/product-slice' 


const [product,setProduct] = useState([])
const dispatch = useDispatch()
const navigate = useNavigate()

useEffect((
    fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')
    .then((res)=>res.json)
    .then((data)=>{
        setProduct(data)
    })
    .catch((err)=>{
        console.log(err)
    })
),{})

const viewProduct=(item)=>{
    dispatch(storeProduct(item))
    navigate('/product-details')

}
const Product = ()=>{
return(
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16">
           <div className="bg-white p-8 text-center shadow rounded-lg">
            <h1 className="text-5xl font-bold">Redux App</h1>
            <p className="text-gray-600 text-lg mt-2">Click on any product to test your your redux app</p>
           </div>
           <div className="w-10/12 mx-auto bg-white rounded-lg shadow p-8 my-12">
            <div className="grid grid-cols-4 gap-8">
                {
                  product.map((item,index)=>(
                    <div key={index} className="shadow-lg rounded-lg border p-6">
                        <img src=
                        {item.image}
                        className="w-full h-[250px] object-cover"
                        />
                        <h1 className="font-semibold text-lg">{item.title}</h1>
                        <label>{item.price}</label>
                        <button onClick={()=>viewProduct()} className="bg-green-500 rounded-md px-4 py-2">View Product Details</button>
                        </div>
                  ))
                }
            </div>
           </div>
        </div>


)
}

export default Product;
import { Link } from "react-router-dom"
const Home = ()=>{
    return(
       <div className ="bg-gray-100 h-screen p-16">
        <h1 className="text-4xl font-bold">Coding Ott</h1>
        <p class name ="text-4xl font-semibold mt-2">Understanding Redux in React JS</p>
         <div className="space-x-8">
            <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            </div> 
       </div>

    )
}

export default Home
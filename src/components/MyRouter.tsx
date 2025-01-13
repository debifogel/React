import {  createBrowserRouter   } from "react-router"
import Login from "./Login"
import { About } from "./about"
import { Private } from "./private"
import { AppLayot } from "./appLayot"


export const myRouter = createBrowserRouter([
{
        path: '/',
        element: <AppLayot/>,
        errorElement: <>main error</>,
children: 
[{ path: 'Login', element: <Login/>},
{path: 'About', element: <About/>},
{path: 'private', element: <Private />}]
}
])

//export const myRouter = () => {

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/person' element={<Person />} />
//             </Routes>
//         </BrowserRouter>
//     )

// }

// export default Router
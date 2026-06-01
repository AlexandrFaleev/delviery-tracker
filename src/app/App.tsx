import './styles/globals.scss'
import {RouterProvider} from './providers'
import {UserProvider} from "@/entities/user";
function App() {

  return (
      <UserProvider>
          <RouterProvider/>
      </UserProvider>
  )

}

export default App

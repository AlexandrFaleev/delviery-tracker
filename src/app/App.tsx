import './styles/globals.scss'
import {RouterProvider} from './providers'
import {UserProvider} from "@/entities/user";
import { OrdersProvider } from "@/entities/order";
function App() {

  return (
      <UserProvider>
          <OrdersProvider>
                <RouterProvider/>
          </OrdersProvider>
      </UserProvider>
  )

}

export default App

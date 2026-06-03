import './styles/globals.scss'
import {UserProvider} from "@/entities/user";
import {Route, Routes} from "react-router";
import {AuthPage, HomePage, OrderPage, ProfilePage} from "@/pages";
import ProtectedRoute from "@/app/routes/ProtectedRoute.tsx";
import {OrdersProvider} from "@/entities/order";
function App() {

  return (
      <UserProvider>
          <Routes>
              <Route path="/login" element={<AuthPage/>}></Route>
              <Route path="/" element={
                  <ProtectedRoute>
                      <OrdersProvider>
                          <HomePage />
                      </OrdersProvider>
                  </ProtectedRoute>
              } />
              <Route path="/profile" element={
                  <ProtectedRoute>
                      <OrdersProvider>
                          <ProfilePage />
                      </OrdersProvider>
                  </ProtectedRoute>
              } />
              <Route path="/order/:id" element={
                  <ProtectedRoute>
                      <OrdersProvider>
                          <OrderPage />
                      </OrdersProvider>
                  </ProtectedRoute>
              } />
          </Routes>
      </UserProvider>
  )

}

export default App

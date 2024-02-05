import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/product";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
// import { useEffect, useState } from "react";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContex";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />}></Route>
                <Route path="cities" element={<CityList />}></Route>
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />}></Route>
              </Route>
              <Route path="login" element={<Login />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

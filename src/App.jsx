import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import CityList from "./features/maps/cities/CityList";
import CountryList from "./features/maps/countries/CountryList";
import Form from "./features/maps/Form";
import City from "./features/maps/cities/City";
import { CitiesProvider } from "./contexts/CitiesContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import Spinner from "./pages/Spinner";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LoginSignup from "./features/authentication/LoginSignup";
const HomePage = lazy(() => import("./pages/HomePage"));
const Product = lazy(() => import("./pages/product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<Product />} />
                <Route path="app" element={<ProtectedRoute />}>
                  <Route
                    index
                    element={<Navigate replace to="cities" />}
                  ></Route>
                  <Route path="cities" element={<CityList />}></Route>
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />}></Route>
                </Route>
                <Route path="login" element={<LoginSignup />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "black",
              },
            }}
          />
        </CitiesProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

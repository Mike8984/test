import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CreateProduct from './pages/createProduct'
import Home from './pages/home'
import Product from './pages/product'
import Search from './pages/search'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="search" element={<Search />} />
        <Route path="products/add" element={<CreateProduct />} />
      </Route>
    </Routes>
  )
}

export default App

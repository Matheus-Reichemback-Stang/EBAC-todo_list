import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

// No createBrowserRouter configuramos as rotas(paths) e o que vai ser configurado nas páginas
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        {/* O RouterProvider gerencias as páginas oferecidas pelo createBrowserRouter */}
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

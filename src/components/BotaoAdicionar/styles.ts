// Componente do React Router Dom para conseguir navegar nas páginas
// sem o carregamento de página
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #44bd32;
  color: #fff;
  font-size: 40px;
  text-decoration: none;
`

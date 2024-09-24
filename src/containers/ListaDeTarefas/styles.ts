import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  /* Caso o conteúdo transborde o 100vh, faça um scroll, mas continue com a altura 100vh */
  overflow-y: scroll;
`
export const Resultado = styled.p`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
  margin-top: 40px;
`

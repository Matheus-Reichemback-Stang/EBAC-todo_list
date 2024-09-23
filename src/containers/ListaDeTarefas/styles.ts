import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  /* Caso o conteúdo transborde o 100vh, faça um scroll, mas continue com a altura 100vh */
  overflow-y: scroll;
`

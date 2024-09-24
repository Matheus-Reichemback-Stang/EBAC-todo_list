import styled from 'styled-components'
// import { Props } from '.'

// Com o Omit é possível criar um Tipo a partir de outro tipo, no entanto omitindo algumas propriedades do tipo ser herdado
// No caso abaixo foi pegado o Type Props e omitido as propriedades: contador e legenda. Se usa o Pipe(|) para dividir os
// nomes das propriedades
// type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio' | 'valor'>

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`

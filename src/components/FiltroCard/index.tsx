import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'

import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = (props: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  // Compara o valor do State com as Props da Tag
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === props.criterio
    const mesmoValor = filtro.valor === props.valor

    return mesmoCriterio && mesmoValor
  }

  // Retorna a quantia de tarefas que atendem a props criterio da tag com a props valor da tag
  const contarTarefas = () => {
    if (props.criterio === 'todas') return tarefas.itens.length
    if (props.criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === props.valor)
        .length
    }
    if (props.criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === props.valor).length
    }
  }

  // Define o novo valor do state
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: props.criterio,
        valor: props.valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{props.legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

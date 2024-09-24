import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/tarefas'

import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditanto, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditanto ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarERemover
              onClick={() => setEstaEditando(!estaEditanto)}
            >
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(!estaEditanto)}>
              Editar
            </S.Botao>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa

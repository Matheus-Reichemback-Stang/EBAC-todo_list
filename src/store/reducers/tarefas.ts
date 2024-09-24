import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      descricao: 'Assistir aula da EBAC',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Pagar conta de Luz',
      descricao: 'Entrar no app do banco e pagar conta de luz',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      titulo: 'Ficar de Bobeira',
      descricao: '19:00 às 22:00',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => {
        return tarefa.id !== action.payload
      })
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer

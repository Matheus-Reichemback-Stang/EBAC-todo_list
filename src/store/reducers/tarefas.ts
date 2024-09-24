import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar TypeScript',
      'Assistir aula da EBAC',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE
    ),
    new Tarefa(
      2,
      'Pagar conta de Luz',
      'Entrar no app do banco e pagar conta de luz',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA
    ),
    new Tarefa(
      3,
      'Ficar de Bobeira',
      '19:00 às 22:00',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => {
        tarefa.id !== action.payload
      })
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer

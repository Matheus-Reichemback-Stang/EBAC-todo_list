import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard contador={3} legenda="Pendentes" />
          <FiltroCard contador={4} legenda="Concluídas" />
          <FiltroCard contador={2} legenda="Urgentes" />
          <FiltroCard contador={2} legenda="Importantes" />
          <FiltroCard contador={3} legenda="Normal" />
          <FiltroCard contador={7} legenda="Todas" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral

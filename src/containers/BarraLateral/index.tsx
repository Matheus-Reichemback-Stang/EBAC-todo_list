import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Procurar" />
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

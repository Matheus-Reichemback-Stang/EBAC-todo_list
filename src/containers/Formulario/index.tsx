import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form>
        <Campo type="text" placeholder="Titulo" />
        <Campo as="textarea" placeholder="Descrição da tarefa" />
        <Opcoes>
          <p>Prioridade:</p>
          {/* é preciso colocar o atributo name com o valor identico para não conseguir selecionar mais de um item */}
          <input name="prioridade" type="radio" id="urgente" />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input name="prioridade" type="radio" id="importante" />{' '}
          <label htmlFor="importante">Importante</label>
          <input name="prioridade" type="radio" id="normal" />{' '}
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

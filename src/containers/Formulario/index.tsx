import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/tarefas'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  // O FormEvent é um tipo do React para configurar o submit de um form
  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        descricao,
        prioridade,
        status: enums.Status.PENDENTE
      })
    )
    // Faz o retorno automatico para a rota definida quando executado
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade:</p>
          {/* é preciso colocar o atributo name com o valor identico para não conseguir selecionar mais de um item */}
          {/* <input
            value={enums.Prioridade.URGENTE}
            name="prioridade"
            type="radio"
            id="urgente"
          />{' '}
          <label htmlFor="urgente">Urgente</label> */}
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                name="prioridade"
                type="radio"
                id={prioridade}
                // Só vai deixar marcada a opção que tiver o valor Normal
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

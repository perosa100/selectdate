import * as S from './styles'
import React from 'react'
import { BsTrash2 as TrashIcon } from 'react-icons/bs'

const DataTableAddUser = ({ data, handleSelectedUser }) => {
  function formatDate(date) {
    var optionsDate = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }

    return Intl.DateTimeFormat('pt-BR', optionsDate).format(new Date(date))
  }

  return (
    <S.Container>
      {data.length > 0 ? (
        <S.Table cellspacing="0" cellpadding="3">
          <S.TableHeader>
            <tr>
              <th>NOME DO FUNCIONARIO</th>
              <th>DATA</th>
              <th>HORÁRIO ENTRADA</th>
              <th>HORÁRIO SAÍDA</th>
              <th>HORÁRIO LANCHE</th>
              <th>TEMPO LANCHE</th>
              <th>HORÁRIO DESCANSO</th>
              <th>TEMPO DESCANSO</th>
              <th></th>
            </tr>
          </S.TableHeader>
          <S.TableBody>
            {data.map((d) => (
              <tr key={d.NOME_DO_FUNCIONARIO} onClick={() => handleSelectedUser(d)}>
                <td>{d.NOME_DO_FUNCIONARIO}</td>
                <td>{formatDate(d.DATA)}</td>
                <td>{d.HORÁRIO_ENTRADA}</td>
                <td>{d.HORÁRIO_SAIDA}</td>
                <td>{d.HORÁRIO_LANCHE}</td>
                <td>{d.TEMPO_LANCHE}</td>
                <td>{d.HORÁRIO_DESCANSO}</td>
                <td>{d.TEMPO_DESCANSO}</td>
                <td>
                  <TrashIcon size={16} />
                </td>
              </tr>
            ))}
          </S.TableBody>
        </S.Table>
      ) : (
        <S.Empty>Nenhuma Busca feita ainda.</S.Empty>
      )}
    </S.Container>
  )
}

export { DataTableAddUser }

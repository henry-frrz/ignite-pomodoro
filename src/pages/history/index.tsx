import * as S from './styles'

function History() {
  return (
    <S.History>
      <h1>Meu Histórico</h1>

      <S.List>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <S.Status feedback='concluded'>Concluído</S.Status>
                {/* <S.Status feedback='interrupt'>Interrompido</S.Status> */}
                {/* <S.Status feedback='inProgress'>Em Andamento</S.Status> */}
              </td>
            </tr>
          </tbody>
        </table>
      </S.List>
    </S.History>
  )
}

export default History

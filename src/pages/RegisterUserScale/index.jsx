import React from 'react'
import * as S from './styles'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Select, MenuItem } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import ptbrLocale from 'date-fns/locale/pt-BR'
import { DataTableAddUser } from '../../components/DataTableAddUser'
import { dataFaker } from '../../components/DataTableAddUser/fake'

const defaultValues = {
  hourInput: 'dd/mm/yyyy'
}

const RegisterUserScale = () => {
  const { handleSubmit, reset, control } = useForm({ defaultValues })
  const [searchProfessional, setSearchProfessional] = React.useState(null)
  const [users, setUsers] = React.useState(dataFaker)

  const [data, setData] = React.useState(null)
  const [dateSelected, setDateSelected] = React.useState([])
  function handleSelectedUser(e) {
    setSearchProfessional(e.NOME_DO_FUNCIONARIO)
  }

  return (
    <S.Container>
      <S.HeaderContent>
        <h3>Cadastro de escalas</h3>
      </S.HeaderContent>
      <S.FormContent onSubmit={handleSubmit((data) => setData(data))}>
        <S.FormContentGrid>
          <S.Section>
            <label>PROFISSIONAL</label>
            <Controller
              name="searchProfessional"
              control={control}
              render={({ field }) => <TextField placeholder="Buscar Funcionário" {...field} />}
            />
          </S.Section>

          <S.Section>
            <label>DATA(S)</label>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptbrLocale}>
              <Controller
                name="dateTime"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <DatePicker
                    value={dateSelected}
                    onChange={(newValue) => {
                      setDateSelected([...dateSelected, ...newValue])
                    }}
                    control={control}
                    {...rest}
                    renderInput={(params) => <TextField {...params} />}
                  />
                )}
              />
            </LocalizationProvider>
          </S.Section>

          <S.Section>
            <label>HORÁRIO DE ENTRADA</label>
            <Controller
              name="entreyTime"
              control={control}
              render={({ field }) => <TextField {...field} />}
            />
          </S.Section>
          <S.Section>
            <label>HORÁRIO DE SAÍDA</label>
            <Controller
              name="departureTime"
              control={control}
              render={({ field }) => <TextField {...field} />}
            />
          </S.Section>
          <S.Section>
            <label>HORÁRIO DE PAUSA LANCHE</label>
            <Controller
              name="snackBreakTime"
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value={'10:15'}>10:15</MenuItem>
                  <MenuItem value={'11:15'}>11:15</MenuItem>
                  <MenuItem value={'12:15'}>12:15</MenuItem>
                </Select>
              )}
              control={control}
            />
          </S.Section>
          <S.Section>
            <label>TEMPO DE PAUSA LANCHE</label>
            <Controller
              name="restBreakTime"
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value={10}>10 minutos</MenuItem>
                  <MenuItem value={20}>20 minutos</MenuItem>
                  <MenuItem value={30}>30 minutos</MenuItem>
                </Select>
              )}
              control={control}
            />
          </S.Section>

          <S.Section>
            <label>HORÁRIO DE PAUSA DESCANSO</label>
            <Controller
              name="restBreakAmount"
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value={'10:15'}>10:15</MenuItem>
                  <MenuItem value={'11:15'}>11:15</MenuItem>
                  <MenuItem value={'12:15'}>12:15</MenuItem>
                </Select>
              )}
              control={control}
            />
          </S.Section>

          <S.Section>
            <label>TEMPO DE PAUSA DESCANSO</label>
            <Controller
              name="Select"
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value={10}>10 minutos</MenuItem>
                  <MenuItem value={20}>20 minutos</MenuItem>
                  <MenuItem value={30}>30 minutos</MenuItem>
                </Select>
              )}
              control={control}
            />
          </S.Section>
        </S.FormContentGrid>
        <S.FormContentFooter>
          <button type="submit">inserir</button>
          <button onClick={() => reset()}>limpar</button>
        </S.FormContentFooter>
      </S.FormContent>
      {data && (
        <pre style={{ textAlign: 'left', color: 'red' }}>
          {JSON.stringify(
            {
              ...data
            },
            null,
            2
          )}
        </pre>
      )}
      <DataTableAddUser data={users} handleSelectedUser={(e) => handleSelectedUser(e)} />
    </S.Container>
  )
}

export { RegisterUserScale }

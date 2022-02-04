import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h3 {
    margin-left: 20px;
  }
`

export const FormContent = styled.form`
  max-width: 750px;
  display: flex;
  padding: 20px;
  flex-direction: column;
`
export const FormContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  .MuiInputBase-input {
    background: #fff;
  }
`
export const FormContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 20px;

  button {
    border: none;
    border-radius: 2px;
    height: 40px;
    width: auto;
    padding: 5px 40px;
    text-align: center;
    margin-left: 20px;
    background: #b4b4b4;
    transition: background ease-in 0.5s;

    &:hover {
      background: #e5e5e5;
    }
  }
`

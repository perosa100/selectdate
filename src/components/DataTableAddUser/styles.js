import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
  max-width: 900px;
  min-height: 400px;
`

export const Table = styled.table`
  margin-top: 20px;
  border-spacing: 0 8px;

  th {
    max-width: 20%;
  }
  th,
  td {
    text-align: center;
    padding: 4px 9px;
  }

  td {
    border-top: 2px solid rgb(200, 200, 200);
    border-bottom: 2px solid rgb(200, 200, 200);
  }

  td:first-child {
    border-left: 2px solid rgb(200, 200, 200);
  }

  /*   td + */
  td:last-child {
    border: none;
    border-left: 2px solid rgb(200, 200, 200);
  }
`

export const TableHeader = styled.thead`
  font-size: 10px;
  tr {
    line-height: 15px;
  }
  color: #a8a8a8;
`

export const TableBody = styled.tbody`
  font-size: 12px;
  border: 2px solid #000;

  tr {
    cursor: pointer;

    td:nth-child(1) {
      text-align: left;
    }
  }
`

export const Empty = styled.tbody`
  font-size: 16px;
  border: 2px solid #000;
  color: #000;
  margin-top: 20px;
`

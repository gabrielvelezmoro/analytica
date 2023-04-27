import { StyledTable, StyledTh, StyledTd } from "./styles"

export interface ITable {
    rows:  any [] | React.ReactNode[]
}

export default function Table({rows}: ITable) {
  console.log('dentro do componente: ', rows[0])
    return (
    <>
      <StyledTable>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>HP</StyledTh>
            <StyledTh>Attack</StyledTh>
            <StyledTh>Defense</StyledTh>
            <StyledTh>Sp.Attack</StyledTh>
            <StyledTh>Sp.Defense</StyledTh>
            <StyledTh>Speed</StyledTh>
            <StyledTh>Total</StyledTh>
          </tr>
           { rows[0].map((row: any) => {
               console.log(row.name)
           return (
               
               <tr>
                <StyledTd> {row.name} </StyledTd>
                <StyledTd> {row.type} </StyledTd>
                <StyledTd> {row.hp} </StyledTd>
                <StyledTd> {row.attack} </StyledTd>
                <StyledTd> {row.defense} </StyledTd>
                <StyledTd> {row.spAttack} </StyledTd>
                <StyledTd> {row.spDefense} </StyledTd>
                <StyledTd> {row.speed} </StyledTd>
                <StyledTd> {row.total} </StyledTd>
              
                </tr>
                )
            })}
      </StyledTable> 
    </>
  )
}


import { useEffect, useState } from "react"
import { StyledTable, StyledTh, StyledTd } from "./styles"


export interface ITable {
    rows:  any [] | React.ReactNode[]
}

export default function Table({rows}: ITable) {
 const [rowOrder, setRowOrder] = useState<any>([]);
const [direction, setDirection] = useState('asc')

 useEffect(() => {
     console.log(rows)
    setRowOrder(rows[0]);
  }, []);

 function order(value: string){
    if (direction === 'asc'){
        const sorted = [...rowOrder].sort((a,b) => 
        (a[value] === b[value] ? 0 : a[value] ===
           undefined ? -1 : b === undefined ? -1 : a[value] > b[value] ? 1: -1)
           )  
        setDirection('desc')
        setRowOrder(sorted);
    }
    else{
        const sorted = [...rowOrder].sort((a,b) => 
        (a[value] === b[value] ? 0 : a[value] ===
           undefined ? -1 : b === undefined ? -1 : a[value] < b[value] ? 1: -1)
           )  
        setDirection('asc')
        setRowOrder(sorted);
    
    }
 }

    return (
    <>
      <StyledTable>
          <tr>
            <StyledTh onClick={(()=>{order('name')})}>Name</StyledTh>
            <StyledTh onClick={(()=>{order('type')})}>Type</StyledTh>
            <StyledTh onClick={(()=>{order('hp')})}>HP</StyledTh>
            <StyledTh onClick={(()=>{order('attack')})}>Attack</StyledTh>
            <StyledTh onClick={(()=>{order('defense')})}>Defense</StyledTh>
            <StyledTh onClick={(()=>{order('spAttack')})}>Sp.Attack</StyledTh>
            <StyledTh onClick={(()=>{order('spDefense')})}>Sp.Defense</StyledTh>
            <StyledTh onClick={(()=>{order('speed')})}>Speed</StyledTh>
            <StyledTh onClick={(()=>{order('total')})}>Total</StyledTh>
          </tr>
           { rowOrder?.map((row: any) => {
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


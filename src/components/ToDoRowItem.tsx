import React from "react";

export const ToDoRowItem : React.FC<{
    rowNumber : number, 
    rowDescription : string, 
    rowAssigned : string, 
    deleteTodo : Function
}> = (props) => {

    const rowNumber = props.rowNumber;
    const rowDescription = props.rowDescription;
    const rowAssigned = props.rowAssigned;

    return (
        <tr onClick={() => props.deleteTodo(rowNumber)}>
            <th scope='row'>{rowNumber}</th>
            <td >{rowDescription}</td>
            <td >{rowAssigned}</td>
        </tr>
    )

}

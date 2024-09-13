
import React from 'react';
import { Table } from 'reactstrap';
function CustomTable({theadName,BoydData}){
    return(
        <>
            <div className="customTable">
            <Table className="table">
                <thead>
                <tr>
                    {
                        theadName.map((thName)=>(
                        <th key={thName.key} scope="col">{thName.label}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    BoydData.map((element  , index)=>(
                        <tr  key={index} >
                            {
                                theadName.map((thName , index)=>(
                                    <td key={thName.key}>
                                        {element[thName.key]}
                                    </td>
                                ))
                            }
                        </tr>       
                    ))

                }
            </tbody>
            </Table>
            </div>
        </>
    )
}


// Wrap the component with React.memo
const MemoizedExampleComponent = React.memo(CustomTable);


export default MemoizedExampleComponent;


import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'

const Todos = () => {
    var [item1,setItem1]= useState([]);
    var [item2,setItem2]= useState([]);
    var [item3,setItem3]= useState([]);
    var [val1,setVal1]= useState();
    var [val2,setVal2]= useState();
    var [val3,setVal3]= useState();
    const changeItem=()=>
    {
        setItem1((ls)=>[...ls,val1]);
        setItem2((ls)=>[...ls,val2]);
        setItem3((ls)=>[...ls,val3]);
        let form1 = document.getElementById("form1");
        let form2 = document.getElementById("form2");
        let form3 = document.getElementById("form3");
        form1.value='';
        form2.value='';
        form3.value='';
      
    }

    const itemInputHandler=(e)=>{
       setVal1(e.target.value);
      
    }

    const desInputHandler=(e)=>{
        setVal2(e.target.value);
       
     }

     const qtyInputHandler=(e)=>{
        setVal3(e.target.value);
       
     }

  return (
    <div style={{backgroundColor:'rgb(246, 246, 161)'}} >

            <Typography variant='h3' style={{color:'rgb(2, 2, 58)'}}>ToDo Application</Typography>
            <br /><br /><br />
      
            <TextField id="form1" variant='outlined' label='Enter Item here' onChange={itemInputHandler}/>
            <br /><br />
            <TextField id="form2" variant='outlined' label='Enter Description here' onChange={desInputHandler}/>
            <br /><br />
            <TextField id="form3" variant='outlined' label='Enter Quantity here' onChange={qtyInputHandler}/>
        
            <br /><br />
            <Button variant='contained' style={{backgroundColor:'rgb(2, 2, 58)'}} onClick={changeItem}>Add Todo</Button>
            <br /><br />

                    <TableContainer> 
                        <Table style={{backgroundColor:'rgb(239, 228, 83)',width:'50%',marginLeft: 'auto',marginRight:'auto'}}>

                            <TableHead>
                                <TableRow>
                                    <TableCell>ITEM</TableCell>
                                    <TableCell>DESCRIPTION</TableCell>
                                    <TableCell>QUANTITY</TableCell> 
                                </TableRow> 
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                    {item1.map((value,index)=>{
                                        return(<p>{value}</p>)
                                    })}

                                    </TableCell>

                                    <TableCell>
                                    {item2.map((value,index)=>{
                                        return(<p>{value}</p>)
                                    })}
                                    </TableCell>

                                   <TableCell>
                                   {item3.map((value,index)=>{
                                        return(<p>{value}</p>)
                                    })}
                                   </TableCell>
 
                                </TableRow>
                            </TableBody>

                        </Table>
                    </TableContainer>
                 
    </div>
  
  )
}

export default Todos
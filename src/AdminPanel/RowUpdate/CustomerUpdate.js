import './CustomerUpdate.css';
import Modal from './Modal';
import Table from './Table';
import { useState } from 'react';

function CustomerUpdate() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows ,setRows] = useState([
    {customer : 'Tom' , description : 'Ordered 2 plate cholle', status :'order delivered'},
    {customer : 'Priya' , description : 'Ordered 1 dosa', status :'Order pending'},
    {customer : 'Ram' , description : 'Ordered 1 Gujarati', status :'Order pending'},
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow]) :
    setRows(rows.map((currRow, idx) => {
      if(idx !== rowToEdit) return currRow
      return newRow;
    }))
  };

  return (
    <div className="App">
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <button className='btn' onClick={() => setModalOpen(true)}>Add</button>
        {modalOpen && (
          <Modal 
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
    </div>  
  );
}

export default CustomerUpdate;

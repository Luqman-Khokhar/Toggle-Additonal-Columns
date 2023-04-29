import React, { useState } from 'react'
import EditCol from './EditCol';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';


function List({ employees, handleEdit, handleDelete }) {
    const [showAttribute, setShowAttribute] = useState(false);
    const [showDay, setShowDay] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    const handleAttributeToggle = () => {
        setShowAttribute(!showAttribute);
    }
    const handleDayToggle = () => {
        setShowDay(!showDay);
    }

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    
    return (
        <div className='contain-table'>
            <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                Edit Columns
            </Button>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Edit Columns</DialogTitle>
                <DialogContent>
                    <EditCol
                        handleToggleAttribute={handleAttributeToggle}
                        handleToggleDay={handleDayToggle}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        {showAttribute && <th>Attribute</th>}
                        {showDay && <th>Day</th>}
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date}</td>
                                {showAttribute && <td>{employee.attribute}</td>}
                                {showDay && <td>{employee.day}</td>}
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={showAttribute ? 8 : 7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List

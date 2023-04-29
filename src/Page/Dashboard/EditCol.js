import React, { useState, useEffect } from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core';

function EditCol({ handleToggleAttribute, handleToggleDay }) {
    const [showAttribute, setShowAttribute] = useState(false);
    const [showDay, setShowDay] = useState(false);

    useEffect(() => {
        const savedShowAttribute = localStorage.getItem('showAttribute') === 'true';
        const savedShowDay = localStorage.getItem('showDay') === 'true';
        setShowAttribute(savedShowAttribute);
        setShowDay(savedShowDay);
    }, []);

    const handleAttributeChange = (event) => {
        setShowAttribute(event.target.checked);
        handleToggleAttribute();
        localStorage.setItem('showAttribute', event.target.checked.toString());
    };

    const handleDayChange = (event) => {
        setShowDay(event.target.checked);
        handleToggleDay();
        localStorage.setItem('showDay', event.target.checked.toString());
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showAttribute}
                        onChange={handleAttributeChange}
                        color="primary"
                    />
                }
                label="Attribute"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showDay}
                        onChange={handleDayChange}
                        color="primary"
                    />
                }
                label="Day"
            />
        </div>
    )
}

export default EditCol

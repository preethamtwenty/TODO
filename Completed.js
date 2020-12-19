import React from 'react';
import './Completed.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Completed({completed_todo}) {
    
    return (
        <div className="completed">
        <div className="completed_items">
        <FiberManualRecordIcon className="dot_icon"></FiberManualRecordIcon>
        <div className="completed_item">{completed_todo}</div>
        </div>
        

        </div>
    )
}

export default Completed

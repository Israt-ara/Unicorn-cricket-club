import React from 'react';
import './Tostar.css'
import { ToastContainer, toast } from 'react-toastify';



const notify = () => {
    toast("Congratulation!! Mission Completed");
}
const Tostar = () => {
    return (
        <div>
            <button className="toaster-btn" onClick={notify}>Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Tostar;
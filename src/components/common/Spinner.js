import React from 'react';

const Spinner = () => {
    console.log('inside Spinner');
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-primary m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;

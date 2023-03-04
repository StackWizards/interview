import React from 'react';

function Button({ text, onClick }) {
    return (
        <>
            <button
                type='button'
                onClick={onClick}
                className='block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
                {text}
            </button>
        </>
    );
}

export default Button;

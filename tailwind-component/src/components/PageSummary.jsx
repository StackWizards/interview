import React from 'react';
import Button from './Button';

function PageSummary() {
    return (
        <div>
            <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                    <h1 className='text-base font-semibold leading-6 text-gray-900'>
                        Users
                    </h1>
                    <p className='mt-2 text-sm text-gray-700'>
                        A list of all the users in your account including their
                        name, title, email and role.
                    </p>
                </div>
                <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
                    <Button
                        text={'Add user'}
                        onClick={() => {
                            console.log('Adding user');
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default PageSummary;

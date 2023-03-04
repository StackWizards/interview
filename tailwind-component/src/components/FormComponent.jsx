import { useContext, useReducer } from 'react';
import Button from './Button';
import UsersListContext from '../Context/UsersListContext';

export default function FormComponent() {
    //users list context from App.js
    const { users, setUsers } = useContext(UsersListContext);

    function handleSubmit(e) {
        e.preventDefault();
        //spread existing users then add newly submitted user from reducer state below
        setUsers([...users, newUser]);
    }

    //reducer maintaining state for all input values ****
    const reducer = (state, action) => {
        switch (action.type) {
            case 'firstName':
                return { ...state, firstName: action.value };
            case 'lastName':
                return { ...state, lastName: action.value };
            case 'title':
                return { ...state, title: action.value };
            case 'email':
                return { ...state, email: action.value };
            case 'role':
                return { ...state, role: action.value };
            default:
                return state;
        }
    };

    const [newUser, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        role: '',
    });

    // ****

    return (
        <>
            <form
                data-testid='form'
                className='space-y-6'
                action='#'
                onSubmit={handleSubmit}
            >
                <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <div className='md:col-span-1'>
                            <h3 className='text-base font-semibold leading-6 text-gray-900'>
                                Personal Information
                            </h3>
                        </div>
                        <div className='mt-5 md:col-span-2 md:mt-0'>
                            <div className='grid grid-cols-6 gap-6'>
                                <div className='col-span-6 sm:col-span-3'>
                                    <label
                                        htmlFor='first-name'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        First name
                                    </label>
                                    <input
                                        type='text'
                                        name='first-name'
                                        id='first-name'
                                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        onChange={(e) => {
                                            dispatch({
                                                type: 'firstName',
                                                value: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className='col-span-6 sm:col-span-3'>
                                    <label
                                        htmlFor='last-name'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type='text'
                                        name='last-name'
                                        id='last-name'
                                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        onChange={(e) => {
                                            dispatch({
                                                type: 'lastName',
                                                value: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className='col-span-6 sm:col-span-4'>
                                    <label
                                        htmlFor='email-address'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type='text'
                                        name='email-address'
                                        id='email-address'
                                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        onChange={(e) => {
                                            dispatch({
                                                type: 'email',
                                                value: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className='col-span-6 sm:col-span-3'>
                                    <label
                                        htmlFor='title'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Title
                                    </label>
                                    <input
                                        id='title'
                                        name='title'
                                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                        onChange={(e) => {
                                            dispatch({
                                                type: 'title',
                                                value: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className='col-span-6'>
                                    <label
                                        htmlFor='Role'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Role
                                    </label>
                                    <input
                                        type='text'
                                        name='role'
                                        id='role'
                                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        onChange={(e) => {
                                            dispatch({
                                                type: 'role',
                                                value: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end py-5'>
                    <Button text='Save' onClick={handleSubmit} />
                </div>
            </form>
        </>
    );
}

import './App.css';
import UserSection from './components/UserSection';
import FormComponent from './components/FormComponent';
import UsersListContext from './Context/UsersListContext';
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    return (
        <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10'>
                <div className='mx-auto max-w-4xl'>
                    <UsersListContext.Provider
                        value={{ users: users, setUsers: setUsers }}
                    >
                        <UserSection />
                        <div className='relative py-10'>
                            <div
                                className='absolute inset-0 flex items-center'
                                aria-hidden='true'
                            >
                                <div className='w-full border-t border-gray-300' />
                            </div>
                            <div className='relative flex justify-start'>
                                <span className='bg-white pr-2 text-sm text-gray-500'>
                                    Edit
                                </span>
                            </div>
                        </div>
                        <FormComponent />
                    </UsersListContext.Provider>
                </div>
            </div>
        </>
    );
}

export default App;

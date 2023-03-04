import { useContext } from 'react';
import UsersListContext from '../Context/UsersListContext';

function UsersTable() {
    const { users } = useContext(UsersListContext);
    return (
        <>
            <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th
                            scope='col'
                            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                            Name
                        </th>
                        <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                            Title
                        </th>
                        <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                            Email
                        </th>
                        <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                            Role
                        </th>
                        <th
                            scope='col'
                            className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                        >
                            <span className='sr-only'>Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                    {users.map((person) => (
                        <tr key={person.email}>
                            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                {`${person.firstName} ${person.lastName}`}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                {person.title}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                {person.email}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                {person.role}
                            </td>
                            <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                <button
                                    onClick={() => {
                                        alert('can this be edited?');
                                    }}
                                    className='text-indigo-600 hover:text-indigo-900'
                                >
                                    Edit
                                    <span className='sr-only'>
                                        , {person.name}
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UsersTable;

import UsersTable from './UsersTable';
import PageSummary from './PageSummary';

export default function UserSection() {
    return (
        <div data-testid='users' className='px-4 sm:px-6 lg:px-8'>
            <PageSummary />
            <div className='mt-8 flow-root'>
                <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                        <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
                            <UsersTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

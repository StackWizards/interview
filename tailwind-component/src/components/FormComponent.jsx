import {people} from "./TailwindComponent";

export default function FormComponent() {
    return (
        <>
        <form className="space-y-6" action="#" method="POST">
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={people[0].name.split(" ")[0]}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={people[0].name.split(" ")[1]}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={people[0].email}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={people[0].title}
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Role" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    id="role"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={people[0].role}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </form>
    <div className="flex justify-end py-5">
        <button
            onClick={()=> {alert("you clicked")}}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Save
        </button>
    </div>
    </>
    )
}

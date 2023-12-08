
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const Data = ({ user, onEdit, onDelete }) => {

    const [Loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000)


    return (
        <div >
            <h1 className='text-center mt-2 text-xl text-white font-bold'>User Details</h1>
            <div className=' mx-4 mt-8 '>
                <div className="relative overflow-x-auto shadow-md  sm:rounded-lg">
                    <table className="w-full  text-sm text-left rtl:text-right text-gray-500 mb-7">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Middle Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Loading ? (
                                <tr className="animate-pulse bg-gray-300">
                                    <td className="px-6 py-4">&nbsp;</td>
                                    <td className="px-6 py-4">&nbsp;</td>
                                    <td className="px-6 py-4">&nbsp;</td>
                                    <td className="px-6 py-4">&nbsp;</td>
                                    <td className="px-6 py-4">&nbsp;</td>
                                    <td className="px-6 py-4">&nbsp;</td>
                                    <td className="flex items-center px-6 py-4">
                                        <div>
                                            <div>
                                                <div className="w-20 h-6 bg-gray-500 rounded-lg">&nbsp;</div>
                                                <div className="w-20 h-6 bg-gray-500 rounded-lg mt-2">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (user?.map((info) => (

                                <tr key={info.id} className="bg-white border-b  hover:bg-gray-200 ">

                                    <td className="px-6 py-2  font-medium text-gray-900 whitespace-nowrap ">
                                        {info.fname}
                                    </td>
                                    <td className="px-6 py-2">
                                        {info.mname}
                                    </td>
                                    <td className="px-6 py-2">
                                        {info.lname}
                                    </td>
                                    <td className="px-6 py-2">
                                        {info.email}
                                    </td>
                                    <td className="px-6 py-2">
                                        {info.address}
                                    </td>
                                    <td className="px-6 py-2">
                                        {info.contact}
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <div>
                                            <div>
                                                <button type='button' onClick={() => onEdit(info)}
                                                    className="text-white bg-blue-600 hover:bg-blue-500 
                                                focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                                                text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none "  >Edit</button>
                                                <button type="button" onClick={() => onDelete(info.id)}
                                                    className="text-white bg-red-700 hover:bg-red-600 
                                                focus:ring-4 focus:ring-blue-300 
                                                font-medium rounded-lg 
                                                text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Delete</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </div>

    )
}

export default Data

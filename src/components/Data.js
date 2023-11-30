import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Data = () => {
    const [data, setData] = useState([])
    const [isFetch, setFetch] = useState(false)
    const [Loading, setLoading] = useState(false)

    const notify = () => {

        toast.success("Data Fetch Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,

        });
    }

    const notifyDelete = () => {

        toast.success("Delete Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,

        });
    }

    const notifyError = () => {

        toast.error("Failed to fetch data. Please check your network connection and try again.'", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,

        });
    }


    async function getData() {
        setFetch(true)
        try {
            setLoading(true)
            const res = await axios.get("https://6565b4d7eb8bb4b70ef22d4a.mockapi.io/users").then((res) => {
                setTimeout(() => {
                    setData(res.data)
                    setFetch(false)
                }, 2000)

            });
            notify()

        } catch (error) {
            console.error("Error fetching data:", error);
            notifyError()
        } finally {
            setLoading(false);
        }
    }

    //get data from api
    useEffect(() => {
        getData();
    }, [])

    function setLs(id, fname, mname, lname, email, address, contact) {
        localStorage.setItem("id", id)
        localStorage.setItem("fname", fname)
        localStorage.setItem("mname", mname)
        localStorage.setItem("lname", lname)
        localStorage.setItem("email", email)
        localStorage.setItem("address", address)
        localStorage.setItem("contact", contact)

    }
    //delete functionality
    const handleDelete = (id) => {
        axios.delete(`https://6565b4d7eb8bb4b70ef22d4a.mockapi.io/users/${id}`)
            .then(
                setTimeout(() => {
                    getData();
                }, 2000),
                notifyDelete()
            )
    }

    return (
        <div className='w-full h-screen bg-gray-700 overflow-scroll'>

            <ToastContainer />
            <h1 className='flex justify-center mt-9 text-lg text-white '>React Task - 2 </h1>

            <h1 className='text-center mt-2 text-xl text-white font-bold'>Simple Crud Application Using MockApi</h1>
            <div className=' mx-4 mt-16'>
                <div className='flex justify-end'><Link to="/add" className=' text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4
                            focus:outline-none'>ADD +</Link></div>

                <div className="relative overflow-x-auto shadow-md  sm:rounded-lg">
                    <table className="w-full  text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
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
                            ) : (data?.map((info, index) => (

                                <tr key={index} className="bg-white border-b  hover:bg-gray-200 ">

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
                                                <Link to="/update" ><button className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                            focus:outline-none " onClick={() => setLs(info.id, info.fname, info.mname, info.lname, info.email, info.address, info.contact)}>Edit</button></Link>
                                                <button type="button" onClick={() => handleDelete(info.id)} className="text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                            focus:outline-none ">Delete</button>
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

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [Loading, setLoading] = useState(false)
    const [id, setId] = useState(0)
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [mname, setMname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault()

        const notify = () => {

            toast.success("Update Data Successfully", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });


        };
        if (!fname || !mname || !lname || !email || !address || !contact) {
            setErrorMessage("Please fill in all fields");
            return; // Stop execution if any field is empty
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email format");
            return; // Stop execution if email format is invalid
        }

        if (isNaN(contact)) {
            setErrorMessage("Contact must be a valid number");
            return;
        }
        setErrorMessage("");
        const newItem = { fname, mname, lname, email, address, contact }
        setLoading(true)
        try {
            axios.put(`https://6565b4d7eb8bb4b70ef22d4a.mockapi.io/users/${id}`, newItem).then(
                setTimeout(() => {
                    navigate("/")
                }, 3000),
                notify()
            )
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setFname(localStorage.getItem('fname'))
        setLname(localStorage.getItem('lname'))
        setMname(localStorage.getItem('mname'))
        setEmail(localStorage.getItem('email'))
        setAddress(localStorage.getItem('address'))
        setContact(localStorage.getItem('contact'))
    }, [])




    return (
        <div className='w-full h-screen bg-gray-700 overflow-scroll'>
            <ToastContainer />
            <h1 className='text-center mt-20 text-xl text-white font-bold'>Update User</h1>
            <div className='flex justify-center'>
                <form className="bg-white shadow-md max-sm:w-50 rounded px-8 pt-6 pb-8 mb-4 mt-12 w-96">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                            FirstName
                        </label>
                        <input className="shadow appearance-none border
           rounded w-full py-2 px-3 text-gray-700 leading-tight 
           focus:outline-none focus:shadow-outline" name='fname' id="fname" value={fname} type="text"
                            onChange={(e) => setFname(e.target.value)} placeholder="First name" />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mname">
                            Middle Name
                        </label>
                        <input className="shadow appearance-none border
           rounded w-full py-2 px-3 text-gray-700 leading-tight 
           focus:outline-none focus:shadow-outline" name='mname' id="mname" value={mname} onChange={(e) => setMname(e.target.value)} type="text" placeholder="Middle name" />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                            Last Name
                        </label>
                        <input className="shadow appearance-none border
           rounded w-full py-2 px-3 text-gray-700 leading-tight 
           focus:outline-none focus:shadow-outline"
                            id="lname"
                            name='lname'
                            value={lname}
                            type="text"
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Last Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border
           rounded w-full py-2 px-3 text-gray-700 leading-tight 
           focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abc@email.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input className="shadow appearance-none border
           rounded w-full py-2 px-3 text-gray-700 leading-tight 
           focus:outline-none focus:shadow-outline" id="address"
                            name='address'
                            type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Area,city,App" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input className="shadow appearance-none border
           rounded w-full py-2 px-3 text-gray-700 leading-tight 
           focus:outline-none focus:shadow-outline" id="contact" name='contact' type="number" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="093723232" />
                        {errorMessage && (<span className="text-sm text-red-600">{errorMessage} </span>)} </div>
                    {Loading ? (
                        <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Loading...
                        </button>
                    ) : (<div className="flex items-center justify-between">
                        <button className="bg-blue-500 w-full hover:bg-blue-700
             text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleUpdate} type="submit">
                            Update
                        </button>
                    </div>)}
                </form>
            </div>
        </div>
    )
}

export default Update

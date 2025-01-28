import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        let passwordArray
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])





    const SavePassword = () => {
      if(form.site.length >4 && form.username.length >4 && form.password.length >4 ){ 
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })
        toast('🦄 YOur Password Has Saved ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: "Bounce",
        });}
        else{
          toast('Site,username,password must be greater than 4 digits or alphabets', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: "Bounce",
        });
        }
    }

    const deletePassword = (id) => {
        console.log("deleting password With Id ", id)
        let c = confirm("Are you realy want to delete ?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('🦄 Your Password Has Deleted  ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: "Bounce",
            });

        }
    }
    const editPassword = (id) => {
        console.log("edit password With Id ", id)
        let c = confirm("Are you want to edit your password ? ")
        if (c) {
            setform(passwordArray.filter(i => i.id === id)[0])
            setPasswordArray(passwordArray.filter(item => item.id !== id))

            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        }
    }


    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition="Bounce"
            />
           <div className="absolute top-0 z-[-2] min-h-screen h-auto w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
  <div className="text-white mx-auto container px-6 md:px-32">
    <span className='flex  flex-col justify-center items-center mx-auto my-4'>
      <h1 className='font-serif text-2xl mt-[80px]'>
        <span className='text-orange-600 font-bold'>&lt;</span>Pas<span className='text-orange-600 text-[35px]'>S</span>ecure/<span className='text-orange-600 font-bold'>&gt;</span>
      </h1>
      <p className='font-serif text-xl mt-3 text-center'>Your Own Password Manager</p>
    </span>

    <div className='flex flex-col md:mx-[85px] mx-auto p-4 m-5 gap-6'>
      <input 
        value={form.site} 
        onChange={handlechange} 
        className='cursor-pointer hover:border-emerald-600 hover:bg-teal-600 hover:text-slate-900 hover:placeholder:text-black rounded-full bg-transparent border-[2px] border-white py-2 px-5 w-full md:w-auto' 
        type="text" 
        name='site' 
        id='site'
        placeholder='Enter Website URL' 
      />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <input 
          value={form.username} 
          required 
          onChange={handlechange} 
          className='hover:placeholder:text-black cursor-pointer hover:border-emerald-600 hover:bg-teal-600 hover:text-slate-900 rounded-full bg-transparent border-2 border-white py-2 px-5 w-full' 
          type="text" 
          name='username' 
          id='username'
          placeholder='Enter Username' 
        />
        <input 
          value={form.password} 
          required 
          onChange={handlechange} 
          className='hover:placeholder:text-black cursor-pointer hover:border-emerald-600 hover:bg-teal-600 hover:text-slate-900 rounded-full bg-transparent border-2 border-white py-2 px-5 max-w-xs w-full md:w-40' 
          type="password" 
          name='password' 
          id='password'
          placeholder='Enter Password' 
        />
      </div>
    </div>

    <button 
      onClick={SavePassword} 
      className='flex justify-center items-center text-slate-900 bg-teal-600 py-2 border-emerald-600 rounded-full border-2 mx-auto px-6 w-fit'>
      <lord-icon
        src="https://cdn.lordicon.com/tsrgicte.json"
        trigger="hover"
        stroke="bold">
      </lord-icon>
      Add Password
    </button>

    <div className="passwords bg-slate-900 bg-opacity-35 my-3 mb-20 py-2 rounded-2xl">
      <h2 className='items-center font-serif text-lg mx-3 font-medium'>Your Passwords</h2>
      {passwordArray.length === 0 && <div>No passwords to show</div>}
      {passwordArray.length !== 0 && 
        <table className="table-auto w-full rounded-md overflow-hidden mb-1">
          <thead className='bg-gray-700'>
            <tr>
              <th className='py-2'>Site</th>
              <th className='py-2'>Username</th>
              <th className='py-2'>Password</th>
              <th className='py-2'>Actions</th>
            </tr>
          </thead>
          <tbody className='py-2 text-center gap-1'>
            {passwordArray.map((item, index) => {
              return (
                <tr key={index}>
                  <td><a href={item.site} target='_blank' rel="noopener noreferrer">{item.site}</a></td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td className='flex items-center justify-center gap-2'>
                    <button onClick={() => { editPassword(item.id) }}>
                      <img src="/icons/edit.svg" alt="Edit" className='w-6 h-6' />
                    </button>
                    <span onClick={() => { deletePassword(item.id) }}>
                      <img src="/icons/delete.svg" alt="Delete" className='w-6 h-6' />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  </div>
</div>
       </>
    )
}

export default Manager

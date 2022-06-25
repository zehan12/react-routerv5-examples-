import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const hasUserEnteredData = firstName !== '' || lastName !== '';

    return (
        <>
            <div className="relative bg-emerald-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-emerald-800 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Page</h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
                        lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
                    </p>
                </div>
            </div>
            {/* form */}
            <div className="container mx-auto">
                <div class="max-w-xl p-5 mx-auto m3-10 bg-white rounded-md shadow-sm">
                    <div class="text-center">
                        <h1 className="mb-3 text-5xl font-semibold text-gray-700">Contact us</h1>
                    </div>
                    <div>
                    <Prompt when={hasUserEnteredData} message="Data will be lost" />
                        <form>
                        <div class="mb-6">
                        
                            <label>
                                First Name:
                                <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300
                                                 rounded-md  focus:outline-none focus:ring  focus:ring-indigo-100 
                                                focus:border-indigo-300"
                                    type="text"
                                    name="name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </label>
                            </div>
                            <label>
                                Last Name:
                                <input  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300
                                                 rounded-md  focus:outline-none focus:ring  focus:ring-indigo-100 
                                                focus:border-indigo-300"
                                    type="text"
                                    name="name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </label>
                            <div class="mb-6">
                            <button className="w-full mt-10 px-2 py-4 text-white bg-indigo-500 rounded-md 
                                                focus:bg-indigo-600 hover:bg-amber-400 focus:outline-none"
                             type="submit" style={{ width: '200px' }} disabled={true}>
                                Submit
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
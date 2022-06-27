import React from "react";
import useFetch from "../../hook/useFetch";
import { Hourglass } from 'react-spinners-css';

const Users = ({ history, location }) => {

  const { data, loading } = useFetch("https://api.github.com/users/zehan12/followers");

  return (<>
    <div className="text-center flex justify-center text-red-700 bg-rose-300">
      <h2>Current location:</h2>
      <h3>{` "${location.pathname}"`}</h3>
    </div>
      <ul className="divide-y divide-gray-200">
        { 
          loading && <div className="text-center my-60 pb-50">
            <Hourglass color="green" size={100} />
          </div>
        }
        {
          data &&
          data.map((user) => {
            return <li key={user.login} className="py-4 mx-40 hover:bg-lime-200 hover:text-purple-800">
              <div className="flex space-x-3 px-4">
                <img className="h-12 w-12 rounded-full" src={user.avatar_url} alt="" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{user.login}</h3>
                    <p onClick={() => {
                      history.push(`/users/${user.id}`);
                    }} className="text-sm text-gray-500 cursor-pointer">{user.id}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    User html url: {user.html_url} api url: {user.url}
                  </p>
                </div>
              </div>
            </li>
          })
        }
      </ul>
  </>
  );
}

export default Users;
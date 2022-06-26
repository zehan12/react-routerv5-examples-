// import React from "react";
// import { useParams } from "react";
import { useLocation, useHistory } from "react-router-dom"

function User( useParams ) {
    const history = useHistory()
    const location = useLocation()

    function goBackHandle(){
        history.goBack()
    }
    return <div className="text-center bg-red-500">
    <h2 className="mb-3 text-5xl font-semibold text-gray-700">User params: {useParams.location.pathname}</h2>
    <h2 className="mb-3 text-5xl font-semibold text-gray-700">User location: {location.pathname}</h2>
    <button onClick={goBackHandle}> Go Back </button>
</div>
}

export default User;
import useFetch from "../../hook/useFetch";
import { Spinner } from "react-spinners-css"

const SingleUser = ({ history, match, location }) => {
  const { params } = match

  const { userId } = params
  const { data, loading } = useFetch("https://api.github.com/users/zehan12/followers");
  return (
    <>
    {
      loading && <div className="text-center my-60 pb-40">
        <Spinner color="#5ED3F3"/>
      </div>
    }
      {data &&
        data.filter(user => user.id === parseInt(userId, 10))
          .map(user => {
            return (
              <>s
                <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                  <div class="rounded-t-lg h-32 overflow-hidden">
                    <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                  </div>
                  <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img class="object-cover object-center h-32" src={user.avatar_url} alt='Woman looking front' />
                  </div>
                  <div class="text-center mt-2">
                    <h2 class="font-semibold">{user.login}</h2>
                    <p class="text-gray-500">{user.html_url}</p>
                  </div>
                  <div class="p-4 border-t mx-8 mt-2">
                    <button onClick={() => { history.goBack() }} class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">go Back</button>
                  </div>
                </div>
              </>)
          })}
    </>
  )
}

export default SingleUser;
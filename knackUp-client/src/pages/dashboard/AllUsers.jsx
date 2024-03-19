import { useState } from "react";
import Container from "../../components/shared/Container";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useUsers from "../../hook/useUsers";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [users, isLoading, refetch] = useUsers(search);
  const reverseArray = [...users]?.reverse()
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be make admin ${user?.name} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.put(`/users/admin/${user?.email}`);
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulation",
            text: `Now ${user?.name} is an Admin.`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
    refetch();
  };

  return (
    <div className="text-white">
      <Helmet>
        <title>Knack | Admin All User</title>
      </Helmet>
      <Container>
        <div className="mb-2 flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-3xl font-medium ">Total User : {users.length}</h2>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id=""
              className="bg-blue-900 p-2 rounded border md:w-96"
              placeholder="Search via email"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-outline text-white ml-2"
            />
          </form>
        </div>
        <div className="overflow-x-auto bg-gradient-to-r from-sky-950 to-sky-900 rounded">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th className="text-white">User</th>
                <th className="text-white">Email</th>
                <th className="text-white">Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {reverseArray?.map((user, inx) => (
              <tbody key={user?._id}>
                {/* row 1 */}
                <tr>
                  <th>{inx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user?.image} alt="userProfile" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.email}</td>

                  <td>{user?.role ? user?.role : "normal user"}</td>

                  <th>
                    {user?.role === "admin" ? (
                      <button
                        className="btn btn-disabled btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white" 
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdmin(user)}
                        className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </Container>
    </div>
  );
};

export default AllUsers;

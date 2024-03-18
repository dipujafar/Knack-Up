import Swal from "sweetalert2";
import Container from "../../components/shared/Container";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useTeacherReq from "../../hook/useTeacherReq";

const TeacherRequest = () => {
  const [teacherReq, isLoading, refetch] = useTeacherReq();
  const axiosSecure = useAxiosSecure();

  const handleApprove = async (email) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be approve this request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.put(`/users/teacherReq/${email}`);
        if(res?.data?. userUpdate?.modifiedCount > 0 && res?.data?. reqUpdate?.modifiedCount > 0){
          Swal.fire({
            title: "Successfully!",
            text: "Accepted this request",
            icon: "success"
          });
          refetch();
        }       
      }
    });
  }

  const handleReject = async (email) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be reject this request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.put(`/users/teacherReq/reject/${email}`);
        if(res?.data?.modifiedCount > 0 ){
          Swal.fire({
            title: "Successfully!",
            text: "Rejected this request",
            icon: "error"
          });
          refetch();
        }       
      }
    });
  }



  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <div className="text-white">
      <Container>
        <h2 className="text-3xl font-medium ">
          Total Request : {teacherReq?.length}
        </h2>
        <div className="overflow-x-auto bg-gradient-to-r from-sky-950 to-sky-900 rounded">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th className="text-white">Candidate</th>
                <th className="text-white">Experience</th>
                <th className="text-white">Title</th>
                <th className="text-white">Category</th>
                <th className="text-white">Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            {teacherReq?.map((req, inx) => (
              <tbody key={req?._id}>
                {/* row 1 */}
                <tr>
                  <th>{inx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={req?.image} alt="userProfile" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{req?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{req?.experience}</td>
                  <td>{req?.title}</td>
                  <td>{req?.category}</td>
                  <td>{req?.status}</td>
                  <td>
                    {req?.status === "pending" ? (
                      <button onClick={()=>handleApprove(req?.email)} className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white">
                        Approve
                      </button>
                    ) : (
                      <button className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white" disabled> Approve</button>
                    )}
                  </td>
                  <td>
                    {req?.status === "pending" ? (
                      <button onClick={()=>handleReject(req?.email)} className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white">
                        Reject
                      </button>
                    ) : (
                      <button className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white" disabled> Reject</button>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </Container>
    </div>
  );
};

export default TeacherRequest;

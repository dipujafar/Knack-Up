import { Helmet } from "react-helmet-async";
import Container from "../../components/shared/Container";
import useAllClasses from "../../hook/useAllClasses";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hook/useAxiosSecure";



const AdminAllClasses = () => {
    const [allClasses,isLoading, refetch] = useAllClasses();
    const reverseArray = [...allClasses]?.reverse();
    const axiosSecure = useAxiosSecure();

    const handleApprove = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be accepted this class!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.put(`/admin/classes/${id}`);
          if(res?.data?.modifiedCount > 0){
            refetch();
          Swal.fire({
            title: "Successfully!",
            text: "Approved This Class",
            icon: "success"
          });
          }
        }
      });
    }
    
    const handleReject = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be reject this class!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.put(`/admin/classesRej/${id}`);
          if(res?.data?.modifiedCount > 0){
            refetch();
          Swal.fire({
            title: "Successfully!",
            text: "Rejected This Class",
            icon: "success"
          });
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
          <Helmet>
            <title>Knack | Admin All Classes</title>
          </Helmet>
          <Container>
            <h2 className="text-3xl font-medium ">
              Total Classes : {reverseArray?.length}
            </h2>
            {<div className="overflow-x-auto bg-gradient-to-r from-sky-950 to-sky-900 rounded">
              <table className="table">

                <thead>
                  <tr>
                    <th>#</th>
                    <th className="text-white">Title</th>
                    <th className="text-white">Image</th>
                    <th className="text-white">Instructor</th>
                    <th className="text-white">Email</th>
                    <th className="text-white">Short Description</th>
                    <th className="text-white">Price</th>
                    <th className="text-white">Status</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {reverseArray?.map((course, inx) => (
                  <tbody key={course?._id}>
                    {/* row 1 */}
                    <tr>
                      <th>{inx + 1}</th>
                      <td>{course?.title}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              <img src={course?.image} alt="userProfile" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{course?.instructor}</td>
                      <td>{course?.email}</td>
                      <td>{course?.short_description}</td>
                      <td>${course?.price}</td>
                      <td>{course?.status}</td>
                    
                      
                      <td>
                        {course?.status === "pending" ? (
                          <button onClick={()=>handleApprove(course?._id)} className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white">
                            Approve
                          </button>
                        ) : (
                          <button className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white" disabled> Approve</button>
                        )}
                      </td>
                      <td>
                        {course.status === "pending" ? (
                          <button onClick={()=>handleReject(course?._id)} className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white">
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
            </div> }
          </Container>
        </div>
      );
  
};

export default AdminAllClasses;
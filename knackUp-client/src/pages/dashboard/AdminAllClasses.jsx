import Container from "../../components/shared/Container";
import useClasses from "../../hook/useClasses";


const AdminAllClasses = () => {
    const [classes] = useClasses();
    console.log(classes);

    const handleApprove = () =>{
        //
    }
    
    const handleReject = () =>{
        //
    }
    
 
    return (
        <div className="text-white">
          <Container>
            <h2 className="text-3xl font-medium ">
              Total Classes : {classes?.length}
            </h2>
            {<div className="overflow-x-auto bg-gradient-to-r from-sky-950 to-sky-900 rounded">
              <table className="table">
                 head 
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-white">Title</th>
                    <th className="text-white">Experience</th>
                    <th className="text-white">Title</th>
                    <th className="text-white">Category</th>
                    <th className="text-white">Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                {classes?.map((course, inx) => (
                  <tbody key={course?._id}>
                    {/* row 1 */}
                    <tr>
                      <th>{inx + 1}</th>
                      <td>{course?.title}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={course?.image} alt="userProfile" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{course?.name}</td>
                      <td>{course?.email}</td>
                      <td>{course?.price}</td>
                      <td>{course?.short_description}</td>
                      <td>
                        {course?.status === "pending" ? (
                          <button onClick={()=>handleApprove(course?.email)} className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white">
                            Approve
                          </button>
                        ) : (
                          <button className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white" disabled> Approve</button>
                        )}
                      </td>
                      <td>
                        {course.status === "pending" ? (
                          <button onClick={()=>handleReject(course?.email)} className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white">
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
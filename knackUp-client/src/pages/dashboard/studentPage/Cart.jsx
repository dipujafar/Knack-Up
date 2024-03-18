import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useCart from "../../../hook/useCart";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import Container from "../../../components/shared/Container";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    const [cart, ,refetch] = useCart();
    const {user} = useAuth();
    const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
    
    const axiosSecure = useAxiosSecure();
  
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete this course!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/cart/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your course has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };
    return (
      <div className="text-white">
        <Container>
        <Helmet>
              <title>{user?.displayName}'s Course Cart</title>
          </Helmet>
        <div className="flex justify-evenly mb-4">
          <h1 className="text-3xl"> Items: {cart.length}</h1>
          <h1 className="text-3xl"> TotalPrice: ${totalPrice.toFixed(2)}</h1>
          <button disabled={!cart.length} className="btn btn-outline btn-sm btn-info">
          <Link to='/dashboard/payment'>
            pay
          </Link>
          </button>
        </div>
        <div className="overflow-x-auto bg-gradient-to-r from-sky-950 to-sky-900 rounded">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-white">#</th>
                <th className="text-white">Image</th>
                <th className="text-white">Title</th>
                <th className="text-white">Instructor</th>
                <th className="text-white">Price</th>
                <th className="text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((course, inx) => (
                <tr key={course?._id}>
                  <th>{inx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={course?.image} alt="food_image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{course?.title}</td>
                  <td>{course?.instructor}</td>
                  <td>${course?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt className="text-red-400"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </Container>
      </div>
      
    );
  };
  
  export default Cart;
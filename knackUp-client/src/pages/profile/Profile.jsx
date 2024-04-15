import Container from "../../components/shared/Container";
import useAdmin from "../../hook/useAdmin";
import useAuth from "../../hook/useAuth";
import useTeacher from "../../hook/useTeacher";

const Profile = () => {
  const [isTeacher] = useTeacher();
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  return (
    <Container>
      <div className="text-white flex flex-col justify-center items-center gap-3">
        <img
          src={user?.photoURL}
          alt="profile_photo"
          className="rounded-full w-52 md:w-72 md:h-52"
        />
        <h1 className="text-4xl">{user?.displayName}</h1>
        <p className="text-4xl">Email : {user?.email}</p>
        {user && isTeacher && <p className="text-4xl">Role : Teacher</p>}
        {user && isAdmin && <p className="text-4xl">Role : Admin</p>}
        {user && ! isTeacher && !isAdmin && <p className="text-4xl">Role : Student</p>}
       <p className="text-4xl">Phone : N/A</p>
        
      </div>
    </Container>
  );
};

export default Profile;

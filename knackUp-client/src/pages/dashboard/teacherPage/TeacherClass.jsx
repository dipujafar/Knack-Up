import Container from "../../../components/shared/Container";
import SectionTitle from "../../../components/shared/SectionTitle";
import useTeacherClass from "../../../hook/useTeacherClass";
import TeacherClassDetails from "./TeacherClassDetails";

const TeacherClass = () => {
  const [teacherClasses, isLoading, refetch] = useTeacherClass();
  console.log(teacherClasses);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <Container>
        <SectionTitle heading={"My Added Class"} subHeading={"These are the classes you added"}></SectionTitle>
      <div>
        {teacherClasses?.map((cls) => (
          <TeacherClassDetails key={cls?._id} cls={cls}></TeacherClassDetails>
        ))}
      </div>
    </Container>
  );
};

export default TeacherClass;

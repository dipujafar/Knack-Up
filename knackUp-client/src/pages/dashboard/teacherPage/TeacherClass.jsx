import { Helmet } from "react-helmet-async";
import Container from "../../../components/shared/Container";
import SectionTitle from "../../../components/shared/SectionTitle";
import useTeacherClass from "../../../hook/useTeacherClass";
import TeacherClassDetails from "./TeacherClassDetails";

const TeacherClass = () => {
  const [teacherClasses, isLoading] = useTeacherClass();
  const reverseArray = [...teacherClasses]?.reverse()
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
        <Helmet>
            <title>Knack | Teacher  Classes</title>
        </Helmet>
        <SectionTitle heading={"My Added Class"} subHeading={"These are the classes you added"}></SectionTitle>
      <div className="grid grid-cols-1 gap-5">
        {reverseArray?.map((cls) => (
          <TeacherClassDetails key={cls?._id} cls={cls}></TeacherClassDetails>
        ))}
      </div>
    </Container>
  );
};

export default TeacherClass;

import prisma from "../lib/prisma";
import { useUser } from "../lib/hooks";
import { GetServerSideProps } from "next";

export default function Students({ students }) {
  const { user } = useUser();

  return (
    <div>
      <div>Students - {`${user?.studentCount}`} assigned to you</div>

      <div className="w-2/5">
        <div>
          <dl>
            {students.map((student) => (
              <div className="my-4 bg-gray-100 px-1 py-5 ">
                <dt className="w-1/4 md:w-full text-md font-medium text-gray-500">
                  {" "}
                  {student.lastName}, {student.firstName}
                </dt>
                <button
                  type="submit"
                  className="mx-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Select
                </button>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
// server-side rendering with this function
export const getServerSideProps: GetServerSideProps =
  async function getStudentProps() {
    const students = await prisma.student.findMany({
      orderBy: {
        lastName: "asc",
      },
    });
    // console.log(students);
    return {
      props: { students },
    };
  };

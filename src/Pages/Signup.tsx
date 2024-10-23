import { Formik, Form, Field } from "formik";
import PrimaryButton from "../components/PrimaryButton";
import { signUpSchema } from "../Yup/SignUpSchema";
import { TeacherContext } from "../context/Teacher";
import { useContext,  } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { setStudent } from "../Store/studentSlice";
import { RootState } from "../Store/store";
import { useStoreRole } from "../customHooks/storeTolocalstorage";


type Props = {};

const Signup = (props: Props) => {
  const teacherContext = useContext(TeacherContext);
  const dispatch = useDispatch()
  const selector = useSelector((state:RootState)=>state.student)
  const storeRole = useStoreRole
  
  return (
    <div className="flex items-center justify-center h-screen border-2 ">
      <div className="w-full max-w-md text-xl font-medium text-black border-2 border-blue-400 p-10 rounded-lg">
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            role: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            // console.log(values)
            if (values.role === "Teacher") {
              // Update context state when form is submitted
              teacherContext?.setFirstName(values.firstName);
              teacherContext?.setLastName(values.lastName);
              teacherContext?.setEmail(values.email);
              teacherContext?.setPhoneNumber(parseInt(values.phoneNumber));
              teacherContext?.setSignUp(true);
              console.log("Context after submission", teacherContext?.state);
              storeRole(values.role,"true")
            } else {
              const newStudent = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                isSignUp: true,
              };
              dispatch(setStudent(newStudent));
              console.log(selector);
              storeRole(values.role, "true");
             
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mt-3">
                <label
                  htmlFor="Firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-sm text-red-500">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Enter your last Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-sm text-red-500">{errors.lastName}</div>
                ) : null}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
                {errors.email && touched.email ? (
                  <div className="text-sm text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Field
                  name="phoneNumber"
                  type="number"
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="text-sm text-red-500">
                    {errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div className="mt-3">
                <label htmlFor="country" className="block text-sm font-medium">
                  Select your country
                </label>
                <Field
                  as="select"
                  name="role"
                  id="role"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value="">-Select a Role-</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">teacher</option>
                </Field>
                {errors.role && touched.role ? (
                  <div className="text-sm text-red-500">{errors.role}</div>
                ) : null}
              </div>
              <PrimaryButton
                type="submit"
                border="none"
                backGroundColor="blue"
                color="white"
                height="40px"
                width="100px"
                radius="5px"
                margin="10px"
              >
                Submit
              </PrimaryButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

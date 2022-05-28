import * as React from "react";
import * as ReactDOM from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { TextInput } from 'react-native-paper';

enum GradeEnum {
  grade1 = "Grade 1",
  grade2 = "Grade 2",
  grade3 = "Grade 3",
  grade4 = "Grade 4",
  grade5 = "Grade 5",
  grade6 = "Grade 6",
  grade7 = "Grade 7",
  grade8 = "Grade 8",
  grade9 = "Grade 9",
  grade10 = "Grade 10",
  grade11 = "Grade 11",
  gceALevel = "A-Level",
}

interface IFormInput {
  firstName: String;
  lastName: String;
  schoolName: String;
  email: String;
  password: any;
  grade: GradeEnum;
}

// const MyComponent = () => {
//   const [text, setText] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(true);
// }


export default function StudentSignup() {
  const {
    register,
    formState: { errors },

    handleSubmit,
  } = useForm<IFormInput>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="StudentSignup">
      <div className="LeftTab">
        <img src={require("../../Assets/Images/testimg4.png")} />
        <div className="LeftTabHeader">Let's enjoy learning with TeachMe</div>

        <div className="Description">
          Already have an account?
          <Link to="#" className="link">
            Log in
          </Link>
        </div>
      </div>
      <div className="RightTab">
        <div className="SignupBody">
          <div className="SignupHeader">Signup as a Student</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formShortRow">
              <div className="formItem">
                <label>First Name</label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <div className="formError">
                  {errors.firstName &&
                    (errors?.firstName as any)?.type == "required" &&
                    "First name is required"}
                  {errors.firstName &&
                    (errors?.firstName as any)?.type == "maxLength" &&
                    "First name must be less than 20 characters"}
                  {errors.firstName &&
                    (errors?.firstName as any)?.type == "pattern" &&
                    "First name must have only letters"}
                </div>
              </div>

              <div className="formItem">
                <label>Last Name</label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: true,
                    maxLength: 30,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <div className="formError">
                  {errors.lastName &&
                    (errors?.lastName as any)?.type == "required" &&
                    "Last name is required"}
                  {errors.lastName &&
                    (errors?.lastName as any)?.type == "maxLength" &&
                    "Last name must be less than 50 characters"}
                  {errors.lastName &&
                    (errors?.lastName as any)?.type == "pattern" &&
                    "Last name must have only letters"}
                </div>
              </div>
            </div>

            <div className="formLongRow">
              <div className="formItem">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  })}
                />
                <div className="formError">
                  {errors.email &&
                    (errors?.email as any)?.type == "required" &&
                    "Email address is required"}
                  {errors.email &&
                    (errors?.email as any)?.type == "pattern" &&
                    "Entered Email is invalid"}
                </div>
              </div>
            </div>
            <div className="formLongRow">
              <div className="formItem">
                <label>School</label>
                <input
                  type="text"
                  {...register("schoolName", { required: true, maxLength: 50 })}
                />
                <div className="formError">
                  {errors.schoolName &&
                    (errors?.schoolName as any)?.type == "required" &&
                    "School name is required"}
                  {errors.schoolName &&
                    (errors?.schoolName as any)?.type == "maxLength" &&
                    "School name must be less than 50 characters"}
                </div>
              </div>
            </div>

            <div className="formShortRow">
              <div className="formItem">
                <label>Password</label>
                <input 
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]$/,
                  })}
                />
                <div className="formError">
                  {errors.password &&
                    (errors?.password as any)?.type == "required" &&
                    "Password is required"}
                  {errors.password &&
                    (errors?.password as any)?.type == "minLength" &&
                    "Password must contain atleast 8 characters"}
                  {errors.password &&
                    (errors?.password as any)?.type == "pattern" &&
                    "Password must contain atleast 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character"}
                </div>
              </div>
              <div className="formItem">
                <label>Grade</label>
                <select
                  {...register("grade", {
                    required: true,
                  })}
                >
                  <option value="0"> - </option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="gceALevel">A-Level</option>
                </select>
                <div className="formError">
                  {/* {errors.grade && "Grade is required"} */}
                </div>
              </div>
            </div>

           




    {/* <TextInput
      label="Password"
      secureTextEntry={passwordVisible}
      right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
    /> */}
 
            {/* <div className="formLongRow">
              <div className="formItem">
                <label>Re-enter password</label>
                <input
                  type="password" 
                  {...register("confirmPassword", {
                    required: true,
                  })}
                />
                <div className="formError">
                  {errors.confirmPassword && "Password needs to be matched"}
                </div>
              </div>
            </div> */}

           
            <div className="submitButton">
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

enum GradeEnum {
  grade1 = "Grade 1",
  grade2 = "Grade 2",
  grade3 = "Grade 1",
  grade4 = "Grade 1",
  grade5 = "Grade 1",
  grade6 = "Grade 1",
  grade7 = "Grade 1",
  grade8 = "Grade 1",
  grade9 = "Grade 1",
  grade10 = "Grade 1",
  grade11 = "Grade 1",
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

export default function StudentSignup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
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
            <div className="formRow">
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
                  {errors.firstName && "First name is required"}
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
                  {errors.lastName && "Last name is required"}
                </div>
              </div>
            </div>

            <div className="formRow">
              <div className="formItem">
                <label>Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <div className="formError">
                  {errors.email && "Email name is required"}
                </div>
              </div>

              <div className="formItem">
                <label>School</label>
                <input
                  type="text"
                  {...register("schoolName", { required: true, maxLength: 50 })}
                />
                <div className="formError">
                  {errors.schoolName && "School name is required"}
                </div>
              </div>
            </div>

            <div className="formRow">
              <div className="formItem">
                <label>Password</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                />
                <div className="formError">
                  {errors.password && "Password is required"}
                </div>
              </div>

              <div className="formItem">
                <label>Re-enter password</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                />
                <div className="formError">
                  {errors.password && "Password needs to be matched"}
                </div>
              </div>
            </div>

            <div className="formRow">
              <div className="formItem">
                <label>Grade</label>
                <select
                  {...register("grade", {
                    required: true,
                  })}
                >
                  <option value="0">-</option>
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
            <div className="submitButton">
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

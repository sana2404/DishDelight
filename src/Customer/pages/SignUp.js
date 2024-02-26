import React from "react";
import { useForm } from "react-hook-form";
import "../styles/SignUp.css";
import Banner from "../images/banner.jpeg";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

function SignUp() {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<>
			<Layout>
			<div style={{ backgroundImage: `url(${Banner})` }}>
			<br /><br /><br /><br /><br />
			<center><p className="title">Registration Form</p></center>

			<form className="SignUp" onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Name" {...register("name")} /><br/>
				<input type="email" placeholder="Email" {...register("email", { required: true })} /><br/>
				{errors.email && <span style={{ color: "red" }}>
					*Email* is mandatory </span>}
				<input type="password" placeholder="Password" {...register("password")} /><br/>
				<Link to='/cart'>
				<button style={{ backgroundColor: "#a1eafb" }}>
					Submit
				</button>
				</Link><br/>
				
				<center>ALready Registered?</center>
				<Link to="/login">
					<button style={{ backgroundColor: "#a1eafb" }}>Log In</button>
				</Link>
			</form>
			<br /><br /><br /><br /><br /><br /><br /><br />
			</div>
		</Layout>
		</>
	);
}

export default SignUp
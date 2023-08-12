import Link from "next/link";

function Signup() {
	return (
		<form>
			<label htmlFor="firstName">First Name</label>
			<input type="text" placeholder="First name" required />
			<br />
			<label htmlFor="lastName">Last Name</label>
			<input type="text" placeholder="Last name" required />
			<br />
			<label htmlFor="email">Email Address</label>
			<input type="email" placeholder="Enter your email" required />
			<br />
			<label htmlFor="password">Password</label>
			<input type="password" placeholder="Enter your password" required />
			<button type="submit">
				<Link href="/home">Create account</Link>
			</button>
		</form>
	);
}

export default Signup;

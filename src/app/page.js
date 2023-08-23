import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Home() {
	return (
		<div>
			<nav>
				<h2>black reads logo</h2>
			</nav>
			<form>
				<label htmlFor="email">Email Address:</label>
				<input type="email" name="email" placeholder="Email" required />
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					placeholder="*********"
					required
				/>

				<button type="submit">
					<Link href="/home">Login</Link>
				</button>
			</form>
			<Link href="/signup">Signup</Link>
			<br />
			<Link href="/">Sign in with Google</Link>
		</div>
	);
}

export default Home;

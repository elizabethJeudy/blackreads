import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Home() {
	return (
		<div>
			<nav>
				<h2>book worm</h2>
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
					<Link href="/dashboard">Login</Link>
				</button>
			</form>
			<Link href="/signup">Signup</Link>
		</div>
	);
}

export default Home;

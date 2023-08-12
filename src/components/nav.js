import Link from "next/link";
{
	/**tab for dashboard, my books, browse genres,
	 * dashboard displays sections rows of trending
	 * my books displays TBR, currently ready, finished, and added library
	 * browse displays drop down with genres
	 */
}

function Nav() {
	return (
		<nav>
			<ul>
				<Link href="/">
					<li>Dashboard</li>
				</Link>
				<Link href="/">
					<li>My Books</li>
				</Link>
				<Link href="/">
					<li>Browse Genres</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;

import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";

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
				<Link href="/dashboard">
					<li>Dashboard</li>
				</Link>
				<Link href="/mybooks">
					<li>My Books</li>
				</Link>
				<Link href="/genres">
					<li>
						Browse
						<BiDownArrow />
					</li>
					<div class="dropdown" id="dropdown">
						<Link href="/">Recommendations</Link>{" "}
						{/** based on prev reads, read shelf (tbr) */}
						<Link href="/">Genres</Link> {/** sections rows of diff genres */}
						<Link href="/">New Releases</Link>{" "}
						{/** list new released books with cover, title, author, release date, description, and option to add to tbr*/}
					</div>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;

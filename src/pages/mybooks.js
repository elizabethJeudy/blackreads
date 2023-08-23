import Nav from "@/components/nav";

function MyBooks() {
	return (
		<div>
			<h1>My Books</h1>
			<Nav />
		</div>
	);
}

export default MyBooks;
/**
 * displays bookshelf
 * lists all books added
 * displays book covers, title, author, avg rating and your rating if able. add dates read and finished
 * want to reads
 * current reads
 * possible kindle connection, add notes and highlights
 NEED AUTHENTICATION api provides: favorites, purchased, to read, reading now, have read, reviewed, recently viewed, my ebooks, books for you 

https://www.googleapis.com/books/v1/{collectionName}/resourceID?parameters
resourceID = identifier / bookshelf resource
parameters = parameters to apply 
*/

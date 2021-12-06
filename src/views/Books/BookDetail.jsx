import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'
import './Books.css'

function BookDetail() {
  const { id } = useParams()

  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <div>
      <Link className="catalogue-link" to="/books">
        Back to Catalog
      </Link>
      <Book book={book} showDetail />{' '}
    </div>
  )
}

export default BookDetail

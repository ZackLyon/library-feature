import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Home/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <div>
          <nav>
            <div>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </div>
          </nav>

          <Switch>
            <Route path="/books/:id">
              <BookDetail />
            </Route>
            <Route path="/books">
              <h1>Library Catalog</h1>
              <BookList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
  )
}

export default App

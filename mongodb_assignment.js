/* ======================
   MongoDB Fundamentals Assignment
   All operations in one file
   Run commands in order from top to bottom
======================= */

/* ==== 1. Database Setup ==== */
// Creating database and collection
use library
db.createCollection("books")

/* ==== 2. Inserting Book Data ==== */
// Inserting 5 books with required fields
db.books.insertMany([
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publishedYear: 1997,
    genre: "Fantasy",
    ISBN: "9780439708180"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
    genre: "Fantasy",
    ISBN: "9780547928227"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publishedYear: 2008,
    genre: "Dystopian",
    ISBN: "9780439023481"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publishedYear: 2003,
    genre: "Mystery",
    ISBN: "9780307474278"
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Dystopian",
    ISBN: "9780451524935"
  }
])

/* ==== 3. Retrieving Data ==== */
// Get all books
db.books.find().pretty()

// Findinging books by specific author
db.books.find({ author: "J.K. Rowling" })

// Find books published after 2000
db.books.find({ publishedYear: { $gt: 2000 } })

/* ==== 4. Update Data ==== */
// Updating publication year of specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { publishedYear: 1949 } }
)

// Adding rating field to all books
db.books.updateMany(
  {},
  { $set: { rating: 4.5 } }
)

/* ==== 5. Delete Data ==== */
// Deleting book by ISBN
db.books.deleteOne({ ISBN: "9780439023481" })

// Removing books by genre
db.books.deleteMany({ genre: "Dystopian" })

/* ==== 6. E-commerce Data Model ==== */
// Switching to ecommerce database
use ecommerce

// Creating users collection
db.createCollection("users")
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  address: "123 Main St",
  createdAt: new Date()
})

// Creating products collection
db.createCollection("products")
db.products.insertOne({
  name: "Wireless Headphones",
  price: 199.99,
  category: "Electronics",
  stock: 50
})

// Creating orders collection (using references)
db.createCollection("orders")
db.orders.insertOne({
  userId: ObjectId("USER_ID_HERE"), // Replace with actual user ID
  products: [
    {
      productId: ObjectId("PRODUCT_ID_HERE"), // Replace with actual product ID
      quantity: 2
    }
  ],
  total: 399.98,
  orderDate: new Date()
})

/* ==== 7. Aggregation Pipeline ==== */
// Switch back to library database
use library

// Total books per genre
db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
])

// Average publication year
db.books.aggregate([
  { $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }
])

// Top-rated books
db.books.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 1 }
])

/* ==== 8. Indexing ==== */
// Createing index on author field
db.books.createIndex({ author: 1 })
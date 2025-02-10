# MongoDB Fundamentals Assignment

## Setup Instructions

### 1. Install MongoDB
- Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- Follow installation guide for your OS
- Start MongoDB service:
  ```bash
  mongod
  ```

### 2. Run the Assignment Script

Open MongoDB shell:
```bash
mongosh
```

Copy-paste contents of `mongodb_assignment.js` into the shell

Or run the script directly:
```bash
mongosh < mongodb_assignment.js
```

## Operations Overview

### Library Database Structure
```javascript
use library
db.createCollection("books")
```

### Sample Book Document
```json
{
  "title": "Harry Potter...",
  "author": "J.K. Rowling",
  "publishedYear": 1997,
  "genre": "Fantasy",
  "ISBN": "9780439708180"
}
```

### Key Operations

#### CRUD Operations:
- Insert 5 books
- Query by author/year
- Update publication year and ratings
- Delete by ISBN/genre

#### E-commerce Model:
```javascript
use ecommerce
db.createCollection("users")
db.createCollection("products")
db.createCollection("orders")
```

#### Aggregation:
- Books per genre
- Average publication year
- Top-rated books

#### Indexing:
```javascript
db.books.createIndex({ author: 1 })
```

## Verification

### Using MongoDB Compass
- Connect to `localhost:27017`
- Check collections in:
  - `library` database
  - `ecommerce` database

### Using Shell Commands
```javascript
// Checking books collection
use library
db.books.find().pretty()

// Checking ecommerce collections
use ecommerce
db.users.find()
db.products.find()

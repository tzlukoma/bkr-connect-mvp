import React from "react";

const books = [
  {
    title: "I’ll Be Right There",
    author: "Jonathan Marshall",
    sku: "B460360",
    bookPrice: "15.01",
    inStock: 2,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/04/ill-be-right-there-book-cover.jpg",
  },
  {
    title: "Thinker- My Puppy Poet and Me",
    author: "Eloise Greenfield",
    sku: "B460360",
    bookPrice: "15.01",
    inStock: 2,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/02/thinker-book-cover.jpg",
  },
  {
    title: "Dara Palmer’s Major Drama",
    author: "Emma Shevah",
    sku: "B460360",
    bookPrice: "15.94",
    inStock: 2,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/02/dara-palmers-major-drama-book-cover.jpg",
  },
  {
    title: "Refugee",
    author: "Alan Gratz",
    sku: "B460360",
    bookPrice: "11.25",
    inStock: 0,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/01/refugee-book-cover.jpg",
  },
  {
    title: "Sofia Valdez, Future Prez",
    author: "Andrea Beaty",
    sku: "B460360",
    bookPrice: "17.82",
    inStock: 0,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/02/sofia-valdez-future-prez-book-cover.jpg",
  },
  {
    title: "My Sister and I",
    author: "Ayesha Rodriguez",
    sku: "B460360",
    bookPrice: "15.01",
    inStock: 1,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/02/my-sister-and-i.jpg",
  },
  {
    title: "I Am (Positive Affirmations for Brown Boys)",
    author: "Ayesha Rodriguez",
    sku: "B460360",
    bookPrice: "9.38",
    inStock: 2,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/02/I-Am-book-boys.jpg",
  },
  {
    title: "Caterpillar Summer",
    author: "Gillian McDunn",
    sku: "B460360",
    bookPrice: "8.44",
    inStock: 1,
    imgUrl:
      "https://brownkidsread.org/wp-content/uploads/2020/01/caterpillar-summer-book-cover.jpg",
  },
];

function Dashboard(props) {
  return (
    <section>
      <h1 class="large text-primary">Manage Inventory</h1>
      <form action="dasboard.html" class="form">
        <p class="my-1">Search Books</p>
        <div class="grid-search-area">
          <div>
            <div>
              <input
                type="text"
                placeholder="Enter book name or SKU"
                required
              />
            </div>
          </div>
          <div>
            <a href="signup.html" class="btn btn-primary">
              Search
            </a>
          </div>
          <div>
            <a href="add-book.html" class="btn btn-primary">
              Add New Book
            </a>
          </div>
        </div>
      </form>
      <div class="grid-book-list my-2">
        {books.map((book) => {
          return (
            <>
              <a href={book.imgUrl} class="card">
                <img src={book.imgUrl} alt="" />
                <div class="card-content">
                  <div class="book-title">{book.title}</div>
                  <div>By {book.author}</div>
                  <div>SKU: {book.sku}</div>
                  <div class="book-price">${book.bookPrice}</div>
                  <span class="stock-tag in-stock">
                    IN STOCK: {book.inStock}
                  </span>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Dashboard;

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Đăng nhập thành công!');
    } else {
      alert('Sai thông tin đăng nhập!');
    }
  }

  async function fetchMovies() {
    const response = await fetch('https://api.example.com/movies'); // thay bằng URL thật
    const movies = await response.json();
  
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      li.dataset.id = movie.id;
      movieList.appendChild(li);
    });
  }
  document.getElementById('movie-list').addEventListener('click', async (e) => {
    if (e.target.tagName === 'LI') {
      const movieId = e.target.dataset.id;
      const response = await fetch(`https://api.example.com/movies/${movieId}`);
      const movieDetail = await response.json();
      showMovieDetail(movieDetail);
    }
  });
  
  function showMovieDetail(movie) {
    const detailEl = document.getElementById('movie-detail');
    detailEl.innerHTML = `
      <h2>${movie.title}</h2>
      <p>${movie.description}</p>
      <p>Release: ${movie.releaseDate}</p>
    `;
  }
  window.addEventListener('hashchange', renderPage);

  function renderPage() {
    const page = window.location.hash.replace('#', '');
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
  }
  
  // Gọi lần đầu khi load trang
  renderPage();
      
  const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

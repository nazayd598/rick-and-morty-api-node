function toggleFavorite(repo) {
  let favs = JSON.parse(localStorage.getItem("favs")) || [];

  if (favs.find(r => r.id === repo.id)) {
    favs = favs.filter(r => r.id !== repo.id);
  } else {
    favs.push(repo);
  }

  localStorage.setItem("favs", JSON.stringify(favs));
}

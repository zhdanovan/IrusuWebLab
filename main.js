const bestsellersSection = document.getElementById('bestsellers');

async function fetchAnimeData() {
    try {
        // Fetch from Jikan API
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
        const data = await response.json();

   
        if (data.data && data.data.length > 0) {
            const animeList = data.data.map(anime => `
                <div class="anime-card">
                    <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}">
                    <h3>${anime.title}</h3>
                    <p>${anime.synopsis ? anime.synopsis.slice(0, 100) + '...' : 'No synopsis available.'}</p>
                </div>
            `).join('');

            bestsellersSection.innerHTML += animeList;
        } else {
            bestsellersSection.innerHTML = '<p>No anime found.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        bestsellersSection.innerHTML = '<p>An error occurred while fetching anime details.</p>';
    }
}

fetchAnimeData();

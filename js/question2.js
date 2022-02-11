const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=06d227ecb6e544b3ab50ce68893cf4c2";

const gamesContainer = document.querySelector(".games-container");

async function getGames() {
  try {
    const response = await fetch(url);

    const result = await response.json();

    const gamesResult = result.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < gamesResult.length; i++) {
      if (i === 8) {
        break;
      }

      gamesContainer.innerHTML += `<article class="game-wrapper">
                                      <p class="games-name"><span>Name:</span> ${gamesResult[i].name}</p>
                                      <p class="games-rating"><span>Rating:</span> ${gamesResult[i].rating}</p>
                                      <p class="games-tag"><span>Number of tags:</span> ${gamesResult[i].tags.length}</p>
                                   </article>`;
    }

    console.log("Games successfully loaded");
  } catch (error) {
    console.log("Unable to load games", error);
    gamesContainer.innerHTML = errorMessage("Error: unable to load games");
  } finally {
    console.log("Loading complete");
  }
}

getGames();

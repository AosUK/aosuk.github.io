const modesJSON = `
{
    "1": "Beginner",
    "2": "Intermediate",
    "3": "Expert"
}
`;

const modeColorMap = {
  1: 'green',
  2: 'blue',
  3: 'red'
};//maybe move this into modejson

const playersJSON = `
[
    { "id": 1, "name": "Player" },
    { "id": 19938283, "name": "A-O-S" },
    { "id": 2150671, "name": "HC" },
    { "id": 8146485, "name": "Cachow" }

]
`;

const gamesJSON = `
[
    { "id": 1, "mode": 1, "playerid": 1, "3bv": 1, "clicks": 1 },
    { "id": 4688359230, "mode": 1, "playerid": 2150671, "3bv": 43, "clicks": 21 },
    { "id": 565781171, "mode": 1, "playerid": 2150671, "3bv": 25, "clicks": 11 },
    { "id": 1334361570, "mode": 1, "playerid": 2150671, "3bv": 34, "clicks": 15 },
    { "id": 4031543916, "mode": 1, "playerid": 2150671, "3bv": 27, "clicks": 12 },
    { "id": 4115514372, "mode": 1, "playerid": 2150671, "3bv": 20, "clicks": 9 },
    { "id": 3975543590, "mode": 1, "playerid": 2150671, "3bv": 20, "clicks": 9 },
    { "id": 611879354, "mode": 1, "playerid": 2150671, "3bv": 22, "clicks": 10 },
    { "id": 4589672446, "mode": 1, "playerid": 2150671, "3bv": 26, "clicks": 12 },
    { "id": 1207345667, "mode": 1, "playerid": 2150671, "3bv": 13, "clicks": 6 }, 
    { "id": 4708301984, "mode": 1, "playerid": 2150671, "3bv": 28, "clicks": 13 },
    { "id": 1337568060, "mode": 1, "playerid": 2150671, "3bv": 28, "clicks": 13 },
    { "id": 1230793519, "mode": 1, "playerid": 2150671, "3bv": 28, "clicks": 13 },
    { "id": 2461044370, "mode": 1, "playerid": 2150671, "3bv": 15, "clicks": 7 },    
    { "id": 3712329000, "mode": 1, "playerid": 2150671, "3bv": 15, "clicks": 7 },
    { "id": 4658153516, "mode": 1, "playerid": 2150671, "3bv": 21, "clicks": 10 },
    { "id": 2990090072, "mode": 1, "playerid": 2150671, "3bv": 21, "clicks": 10 },
    { "id": 859329450, "mode": 1, "playerid": 2150671, "3bv": 25, "clicks": 12 },
    { "id": 1045693371, "mode": 1, "playerid": 2150671, "3bv": 25, "clicks": 12 },
    { "id": 3534879245, "mode": 1, "playerid": 2150671, "3bv": 25, "clicks": 12 },
    { "id": 1212638027, "mode": 1, "playerid": 2150671, "3bv": 27, "clicks": 13 },
    { "id": 4702354273, "mode": 1, "playerid": 2150671, "3bv": 31, "clicks": 15 },   
    { "id": 4674674072, "mode": 1, "playerid": 2150671, "3bv": 31, "clicks": 15 },
    { "id": 4677082950, "mode": 1, "playerid": 2150671, "3bv": 31, "clicks": 15 },
    { "id": 4688359230, "mode": 1, "playerid": 2150671, "3bv": 43, "clicks": 21 },
    { "id": 1733812562, "mode": 2, "playerid": 2150671, "3bv": 92, "clicks": 51 },
    { "id": 4546455340, "mode": 1, "playerid": 19938283, "3bv": 17, "clicks": 8 },
    { "id": 4591584617, "mode": 1, "playerid": 19938283, "3bv": 17, "clicks": 8 },
    { "id": 4722771143, "mode": 1, "playerid": 19938283, "3bv": 34, "clicks": 16 },
    { "id": 4713331086, "mode": 1, "playerid": 19938283, "3bv": 9, "clicks": 4 },
    { "id": 4383375566, "mode": 2, "playerid": 19938283, "3bv": 87, "clicks": 55 },
    { "id": 4626713003, "mode": 2, "playerid": 19938283, "3bv": 78, "clicks": 50 },
    { "id": 3818921625, "mode": 3, "playerid": 19938283, "3bv": 163, "clicks": 141 },
    { "id": 1578361577, "mode": 1, "playerid": 8146485, "3bv": 17, "clicks": 7 },
    { "id": 3137261850, "mode": 1, "playerid": 8146485, "3bv": 21, "clicks": 9 },
    { "id": 2698767704, "mode": 1, "playerid": 8146485, "3bv": 20, "clicks": 9 },
    { "id": 3077289780, "mode": 1, "playerid": 8146485, "3bv": 24, "clicks": 11 },
    { "id": 4093004920, "mode": 1, "playerid": 8146485, "3bv": 26, "clicks": 12 },
    { "id": 2574347450, "mode": 1, "playerid": 8146485, "3bv": 15, "clicks": 7 },
    { "id": 2524984870, "mode": 1, "playerid": 8146485, "3bv": 15, "clicks": 7 },
    { "id": 3149487353, "mode": 1, "playerid": 8146485, "3bv": 32, "clicks": 15 },
    { "id": 3134109637, "mode": 1, "playerid": 8146485, "3bv": 32, "clicks": 15 },
    { "id": 3025618045, "mode": 1, "playerid": 8146485, "3bv": 17, "clicks": 8 },
    { "id": 2208507453, "mode": 1, "playerid": 8146485, "3bv": 17, "clicks": 8 },
    { "id": 2302860293, "mode": 1, "playerid": 8146485, "3bv": 19, "clicks": 9 },
    { "id": 2703706523, "mode": 1, "playerid": 8146485, "3bv": 21, "clicks": 10 },
    { "id": 2693148822, "mode": 1, "playerid": 8146485, "3bv": 21, "clicks": 10 },
    { "id": 2003458106, "mode": 1, "playerid": 8146485, "3bv": 21, "clicks": 10 },
    { "id": 1575762263, "mode": 1, "playerid": 8146485, "3bv": 21, "clicks": 10 },
    { "id": 3118940303, "mode": 1, "playerid": 8146485, "3bv": 31, "clicks": 15 },
    { "id": 3553799116, "mode": 1, "playerid": 8146485, "3bv": 29, "clicks": 14 },
    { "id": 3099325364, "mode": 1, "playerid": 8146485, "3bv": 39, "clicks": 19 }   
]
`;


const players = JSON.parse(playersJSON);
const games = JSON.parse(gamesJSON);
const modes = JSON.parse(modesJSON);

const playerMap = {};
players.forEach(player => {
  playerMap[player.id] = player.name;
});

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    playerid: Number(params.get('playerid')) || 0,
    mode: Number(params.get('mode')) || 0
  };
}

function updateURLWithPlayerId(playerid) {
  const params = new URLSearchParams(window.location.search);
  if (playerid === null || playerid === 0) {
    params.delete('playerid');
  } else {
    params.set('playerid', playerid);
  }
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, '', newUrl);
  renderTable();
}

function updateURLWithMode(mode) {
  const params = new URLSearchParams(window.location.search);
  if (mode === null || mode === 0) {
    params.delete('mode');
  } else {
    params.set('mode', mode);
  }
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, '', newUrl);
  renderTable();
}

function renderTable() {
  const { playerid, mode } = getQueryParams();
  const tableBody = document.getElementById('game-list');
  const filterInfo = document.getElementById('filter-info');
  tableBody.innerHTML = '';

  const filteredGames = games.filter(game => {
    const matchPlayer = playerid === 0 || game.playerid === playerid;
    const matchMode = mode === 0 || game.mode === mode;
    return matchPlayer && matchMode;
  });

  const uniqueGamesMap = new Map();
filteredGames.forEach(game => {
  if (!uniqueGamesMap.has(game.id)) {
    uniqueGamesMap.set(game.id, game);
  }
});
const uniqueGames = Array.from(uniqueGamesMap.values());

  //uniqueGames.sort((a, b) => (b["3bv"] / b.clicks) - (a["3bv"] / a.clicks));
  uniqueGames.sort((a, b) => {
  const effA = a["3bv"] / a.clicks;
  const effB = b["3bv"] / b.clicks;

  if (effB !== effA) {
    return effB - effA;
  } else {
    return b["3bv"] - a["3bv"];
  }
});

  let infoText = '';
  if (playerid && playerid !== 0) {
    infoText += `Player: ${playerMap[playerid] || playerid} `;
  }
  if (mode && mode !== 0) {
    infoText += `Mode: ${modes[mode] || mode} `;
  }
  filterInfo.textContent = infoText || 'All games';

  uniqueGames.forEach(game => {
    const playerName = playerMap[game.playerid] || 'Unknown';
    const modeName = modes[game.mode] || 'Unknown';
    const modeColor = modeColorMap[game.mode] || 'black';
    const efficiency = Math.round((game["3bv"] / game.clicks) * 100);
    const gameUrl = `https://minesweeper.online/game/${game.id}`;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href="#" class="player-link" data-playerid="${game.playerid}">${playerName}</a></td>
      <td><a href="${gameUrl}" class="efficiency-text" target="_blank" rel="noopener noreferrer">${efficiency}%</a></td>
      <td>${game["3bv"]}</td>
      <td>${game.clicks}</td>
        <td>
        <span style="color: var(--${modeColor});">${modeName}</span>
        </td>
    `;
    tableBody.appendChild(row);
  });

  if (filteredGames.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="6" style="text-align:center;">No games found</td>`;
    tableBody.appendChild(row);
  }

document.querySelectorAll('.player-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pid = Number(e.target.dataset.playerid);
      updateURLWithPlayerId(pid);
    });
  });

  document.querySelectorAll('.mode-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const selectedMode = Number(e.target.dataset.mode);
      updateURLWithMode(selectedMode);
    });
  });
}


document.getElementById('remove-filters').addEventListener('click', () => {
  history.pushState(null, '', window.location.pathname);
  renderTable();
});

document.getElementById('next-mode').addEventListener('click', () => {
  const params = new URLSearchParams(window.location.search);
  const currentMode = Number(params.get('mode')) || 0;
  const modeIds = Object.keys(modes).map(Number).sort();
  const currentIndex = modeIds.indexOf(currentMode);
  const nextIndex = (currentIndex + 1) % (modeIds.length + 1);
  const nextMode = nextIndex === modeIds.length ? 0 : modeIds[nextIndex];

  if (nextMode === 0) {
    params.delete('mode');
  } else {
    params.set('mode', nextMode);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, '', newUrl);
  renderTable();
});

renderTable();

window.addEventListener('popstate', renderTable);

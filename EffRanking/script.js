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
  3: 'red',
  0: 'cream'
};//maybe move this into modejson

const playersJSON = `
{
  "fields": ["id", "name"],
  "data": [
    [1, "Player"],
    [19938283, "A-O-S"],
    [2150671, "HC"],
    [8146485, "Cachow"],
    [733893, "Llama"],
    [10824130, "055D"],
    [3020427, "Rory"],
    [7395472, "Jeff"],
    [7534731, "Svedas"],
    [24343172, "bot1k"],
    [6229919, "Anonymous6229919"],
    [1537421, "trckui11"],
    [5587951, "Mario Pro Gamer"],
    [3697173, "oreotheuser"]
  ]
}
`;


const gamesJSON = `
{
  "fields": ["id", "mode", "playerid", "3bv", "clicks"],
  "data": [
    [1, 0, 1, 1, 100],
    [4688359230, 1, 2150671, 43, 21],
    [565781171, 1, 2150671, 25, 11],
    [1334361570, 1, 2150671, 34, 15],
    [4031543916, 1, 2150671, 27, 12],
    [4115514372, 1, 2150671, 20, 9],
    [3975543590, 1, 2150671, 20, 9],
    [611879354, 1, 2150671, 22, 10],
    [4589672446, 1, 2150671, 26, 12],
    [1207345667, 1, 2150671, 13, 6],
    [4708301984, 1, 2150671, 28, 13],
    [1337568060, 1, 2150671, 28, 13],
    [1230793519, 1, 2150671, 28, 13],
    [2461044370, 1, 2150671, 15, 7],
    [3712329000, 1, 2150671, 15, 7],
    [4658153516, 1, 2150671, 21, 10],
    [2990090072, 1, 2150671, 21, 10],
    [859329450, 1, 2150671, 25, 12],
    [1045693371, 1, 2150671, 25, 12],
    [3534879245, 1, 2150671, 25, 12],
    [1212638027, 1, 2150671, 27, 13],
    [4702354273, 1, 2150671, 31, 15],
    [4674674072, 1, 2150671, 31, 15],
    [4677082950, 1, 2150671, 31, 15],
    [4688359230, 1, 2150671, 43, 21],
    [1733812562, 2, 2150671, 92, 51],
    [4546455340, 1, 19938283, 17, 8],
    [4591584617, 1, 19938283, 17, 8],
    [4722771143, 1, 19938283, 34, 16],
    [4713331086, 1, 19938283, 9, 4],
    [4383375566, 2, 19938283, 87, 55],
    [4626713003, 2, 19938283, 78, 50],
    [3818921625, 3, 19938283, 163, 141],
    [1578361577, 1, 8146485, 17, 7],
    [3137261850, 1, 8146485, 21, 9],
    [2698767704, 1, 8146485, 20, 9],
    [3077289780, 1, 8146485, 24, 11],
    [4093004920, 1, 8146485, 26, 12],
    [2574347450, 1, 8146485, 15, 7],
    [2524984870, 1, 8146485, 15, 7],
    [3149487353, 1, 8146485, 32, 15],
    [3134109637, 1, 8146485, 32, 15],
    [3025618045, 1, 8146485, 17, 8],
    [2208507453, 1, 8146485, 17, 8],
    [2302860293, 1, 8146485, 19, 9],
    [2703706523, 1, 8146485, 21, 10],
    [2693148822, 1, 8146485, 21, 10],
    [2003458106, 1, 8146485, 21, 10],
    [1575762263, 1, 8146485, 21, 10],
    [3118940303, 1, 8146485, 31, 15],
    [3553799116, 1, 8146485, 29, 14],
    [3099325364, 1, 8146485, 39, 19],
    [4116811644, 1, 733893, 31, 12],
    [3306358669, 1, 733893, 27, 12],
    [4623358397, 1, 733893, 29, 13],
    [4081965155, 1, 733893, 29, 13],
    [4721151080, 1, 733893, 13, 6],
    [3281013514, 1, 733893, 13, 6],
    [4714607778, 1, 733893, 28, 13],
    [4046203684, 1, 733893, 28, 13],
    [1689049605, 1, 733893, 28, 13],
    [4724860008, 1, 733893, 17, 8],
    [4217025886, 1, 733893, 17, 8],
    [2674528526, 1, 733893, 17, 8],
    [4721177915, 1, 733893, 19, 9],
    [3151332197, 1, 733893, 19, 9],
    [4228430745, 1, 733893, 25, 12],
    [4063760401, 1, 733893, 27, 13],
    [4063640964, 1, 733893, 27, 13],
    [4429772846, 1, 733893, 31, 15],
    [3296108930, 1, 733893, 31, 15],
    [4167458152, 1, 733893, 33, 16],
    [3142351035, 1, 733893, 39, 19],
    [4724461465, 1, 733893, 28, 14],
    [4720837080, 1, 733893, 34, 17],
    [4720271382, 1, 733893, 32, 16],
    [4720194946, 1, 733893, 16, 8],
    [4717946486, 1, 733893, 16, 8],
    [4619888895, 1, 733893, 22, 11],
    [4619886863, 1, 733893, 20, 10],
    [4619857990, 1, 733893, 24, 12],
    [4545862564, 1, 733893, 28, 14],
    [4545806576, 1, 733893, 28, 14],
    [4545764642, 1, 733893, 24, 12],
    [4437280958, 1, 733893, 22, 11],
    [4363957121, 1, 733893, 26, 13],
    [4336402330, 1, 733893, 38, 19],
    [4135569697, 1, 733893, 16, 8],
    [4069974626, 1, 733893, 24, 12],
    [4067254524, 1, 733893, 18, 9],
    [4064279157, 1, 733893, 22, 11],
    [4063962886, 1, 733893, 20, 10],
    [4061185279, 1, 733893, 24, 12],
    [4061099857, 1, 733893, 22, 11],
    [4060691638, 1, 733893, 26, 13],
    [4057263005, 1, 733893, 20, 10],
    [4053946638, 1, 733893, 20, 10],
    [4045957526, 1, 733893, 26, 13],
    [4004038926, 1, 733893, 22, 11],
    [3961206841, 1, 733893, 26, 13],
    [3882463824, 1, 733893, 24, 12],
    [3867314656, 1, 733893, 10, 5],
    [3835875531, 1, 733893, 26, 13],
    [3441512665, 1, 733893, 32, 16],
    [3309386810, 1, 733893, 10, 5],
    [3301808975, 1, 733893, 20, 10],
    [3293649653, 1, 733893, 24, 12],
    [3282968737, 1, 733893, 24, 12],
    [3263062542, 1, 733893, 24, 12],
    [3151251088, 1, 733893, 24, 12],
    [3127099623, 1, 733893, 22, 11],
    [3078308747, 1, 733893, 16, 8],
    [2822830230, 1, 733893, 22, 11],
    [2807368166, 1, 733893, 26, 13],
    [2789980903, 1, 733893, 24, 12],
    [2698749959, 1, 733893, 32, 16],
    [2568163515, 1, 733893, 28, 14],
    [1517532990, 1, 733893, 24, 12],
    [1483942752, 1, 733893, 20, 10],
    [1404587020, 1, 733893, 22, 11],
    [1223574070, 1, 733893, 28, 14],
    [808240763,  1, 733893, 24, 12],
    [3769195287, 1, 10824130, 16, 7],
    [4435972750, 1, 10824130, 22, 10],
    [4328974503, 1, 10824130, 28, 13],
    [4648930103, 1, 10824130, 32, 15],
    [4612751646, 1, 10824130, 19, 9],
    [4048715462, 1, 10824130, 21, 10],
    [4118962861, 1, 10824130, 21, 10],
    [4334405785, 1, 10824130, 23, 11],
    [4158571742, 1, 10824130, 25, 12],
    [3778420878, 1, 10824130, 25, 12],
    [3702973325, 1, 10824130, 27, 13],
    [3811008970, 1, 10824130, 29, 14],
    [3909399046, 1, 10824130, 31, 15],
    [546033402,  1, 3020427,  21, 9],
    [1474303332, 1, 3020427,  25, 11],
    [2666394949, 1, 7395472,  16, 7],
    [1699800359, 1, 7395472,  28, 13],
    [2142587595, 1, 7395472, 15, 7],
    [2572434973, 1, 7395472, 21, 10],
    [2587267357, 1, 7395472, 23, 11],
    [2237144123, 1, 7395472, 25, 12],
    [1709006084, 1, 7395472, 27, 13],
    [1691512329, 1, 7395472, 27, 13],
    [1612417297, 1, 7395472, 25, 12],
    [1687621210, 1, 7534731, 18, 8],
    [3933619018, 1, 7534731, 29, 14],
    [1459886139, 1, 2150671, 20, 10],
    [1324037108, 1, 2150671, 10, 5],
    [4093089154, 1, 2150671, 14, 7],
    [796457106,  1, 2150671, 8, 4],
    [3500284515, 1, 2150671, 12, 6],
    [764967622,  1, 2150671, 16, 8],
    [4182924548, 1, 2150671, 16, 8],
    [598978484,  1, 2150671, 18, 9],
    [1294211307, 1, 2150671, 14, 7],
    [4679017070, 1, 2150671, 16, 8],
    [1562885350, 1, 2150671, 10, 5],
    [4517686452, 1, 2150671, 32, 16],
    [3324493338, 1, 2150671, 28, 14],
    [3263024778, 1, 2150671, 28, 14],
    [4685913265, 1, 2150671, 16, 8],
    [1309104423, 1, 2150671, 12, 6],
    [4516611555, 1, 2150671, 32, 16],
    [812927326,  1, 2150671, 26, 13],
    [1267100993, 1, 2150671, 28, 14],
    [809128141,  1, 2150671, 30, 15],
    [1430516217, 1, 2150671, 38, 19],
    [4714282131, 1, 2150671, 26, 13],
    [4467288414, 1, 2150671, 38, 19],
    [1267106202, 1, 2150671, 28, 14],
    [1179751077, 1, 2150671, 32, 16],
    [4628712183, 1, 2150671, 44, 22], 
    [1252928494, 1, 2150671, 26, 13],
    [3292858823, 1, 2150671, 28, 14],
    [790724369,  1, 2150671, 20, 10],
    [852262679,  1, 2150671, 26, 13],
    [1246675324, 1, 2150671, 20, 10],
    [4732136066, 1, 2150671, 22, 11],
    [3949372516, 1, 24343172, 16, 7],
    [465282533,  1, 6229919, 18, 8],
    [1060564856, 1, 1537421, 14, 6],
    [2449439787, 1, 5587951, 18, 8],
    [1232143344, 1, 3697173, 33, 16],
    [1332558686, 1, 3697173, 32, 15],
    [1336905196, 1, 3697173, 27, 13],
    [1028818941, 1, 3697173, 26, 12],
    [1020862959, 1, 3697173, 18, 8],
    [1023389442, 1, 3697173, 22, 10],
    [1042313727, 1, 3697173, 32, 14],
    [1222585702, 1, 3697173, 28, 13],
    [1297349578, 1, 3697173, 27, 12]
  ]
}
`;


const parsedPlayers = JSON.parse(playersJSON);

const players = parsedPlayers.data.map(row => {
  const obj = {};
  parsedPlayers.fields.forEach((field, i) => {
    obj[field] = row[i];
  });
  return obj;
});
const parsedGames = JSON.parse(gamesJSON);

const games = parsedGames.data.map(row => {
  const obj = {};
  parsedGames.fields.forEach((field, i) => {
    obj[field] = row[i];
  });
  return obj;
});

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
    const thumbnailUrl = `https://minesweeper.online/img/game_thumbs/${game.id}.jpg`;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href="#" class="player-link" data-playerid="${game.playerid}">${playerName}</a></td>
      <td><a href="${gameUrl}" class="efficiency-text" target="_blank" rel="noopener noreferrer">${efficiency}%</a></td>
      <td>${game["3bv"]}</td>
      <td>${game.clicks}</td>
      <td><span style="color: var(--${modeColor});">${modeName}</span></td>
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

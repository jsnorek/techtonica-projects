import Game from "./Game";

function GameList({ gameData }) {

    if (!gameData ) {
        return <p>Loading games...</p>
    }
    // const filteredGames = gameData.filter(game => !game.name.toLowerCase().includes('undefined' || 'u-ndefined'));

    console.log('game data from gamelist', gameData);
    return (
        <div className="game-list">
            <h2>Highest Rated Games</h2>
            {gameData.map((game) => (
                <Game key={game.id} game={game} />
            ))}
        </div>
    )
};

export default GameList;
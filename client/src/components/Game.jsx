import { useEffect, useState } from 'react'
import { DeferredContent } from 'primereact/deferredcontent';    
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

function Game({ game }) {
    if (!game) {
        return <p>Loading game...</p>
    }
    return (
        <div>
        <div key={game.id} className='game'>
            <img src={game.background_image} alt={game.name} style={{ width: '200px' }}/>
            <h3>{game.name}</h3>
            <p>Metacritic Rating: {game.metacritic}</p>
        </div>
        <Button label='details'/>
        <Button icon="pi pi-heart" rounded text severity="help" aria-label="Favorite" />
        </div>
    )

    // return(
    //     <div className='game-data'>
    //     {gameData && gameData.results ? (
    //       <>
    //       <h2>Games</h2>
    //         <DeferredContent onLoad={onGameLoad}>
    //           <div className='game-list'>
    //             {gameData.results.map((game) => renderGame(game))}
    //           </div>
    //         </DeferredContent>
    //       </>
    //     ) : (
    //       <p>Loading games...</p>
    //     )}  
    //   </div>
    // )
}

export default Game;
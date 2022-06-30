import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { GameCover } from "../game-cover/GameCover"
import { GameBuy } from "../game-buy/GameBuy"
import { GameGenre } from "../game-genre/GameGenre"
import { setCurrentGame } from "../../store/slice/games"
import "./GameItem.css"

export const GameItem = ({ game }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }
    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image} />
            <div className='game-item_details'>
                <span className="game-item_title">{game.title}</span>
                <div className='game-item_genre'>
                    {game.genres.map(genre => (<GameGenre genre={genre} key={genre} />))}
                </div>
                <div className='game-item_buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
}

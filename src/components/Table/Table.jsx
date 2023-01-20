import { useState } from "react";
import { Card } from "../Card/Card";
import { Deck } from "../Deck/Deck"
import styles from "./Table.module.scss"

export function Table() {

    const [player, setPlayer] = useState(0)

    const [handPlayer, setHandPlayer] = useState([])
    const [handEnemy, setHandEnemy] = useState([])

    const deckPickCard = (card) => {
        if (!player) {
            setHandPlayer([...handPlayer, card])
            setPlayer(1)
        } else {
            setHandEnemy([...handEnemy, card])
            setPlayer(0)
        }
    }

    return (
        <div className={styles.container}>
            <h2>{player + 1} Player`s turn</h2>
            <div className={styles.deck}>
                <Deck pickCardCallBack={deckPickCard} />
            </div>

            <div className={styles.hands}>
                <div id="player" className={styles.hand}>
                    {
                        handPlayer.map((card, index) => {
                            return (
                                <Card
                                    name={card.name}
                                    suit={card.suit}
                                    isInHand={true}
                                    key={`player-${card.name}-${card.suit}`}
                                />
                            )
                        })
                    }
                </div>
                <div id={styles.enemy} className={styles.hand}>
                    {
                        handEnemy.map((card, index) => {
                            return (
                                <Card
                                    name={card.name}
                                    suit={card.suit}
                                    isInHand={true}
                                    key={`player-${card.name}-${card.suit}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import { Card } from "../Card/Card"
import styles from "./Deck.module.scss"

export function Deck({ pickCardCallBack }) {

    const helperSuits = {
        "diams": {
            "color": "red",
            "simbol": "♦"
        },
        "hearts": {
            "color": "red",
            "simbol": "♥"
        },
        "spades": {
            "color": "black",
            "simbol": "♠"
        },
        "clubs": {
            "color": "black",
            "simbol": "♣"
        },
    }

    const suits = ["hearts", "diams", "clubs", "spades"];
    const names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const shuffle = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck
    }

    const [deck, setDeck] = useState(
        shuffle(names.map((name) => (
            suits.map((suit) => (
                {
                    suit,
                    name,
                }
            ))
        )).flat())
    );

    const handlePickCard = () => {
        const auxDeck = [...deck]
        const cardPicked = auxDeck.pop()
        if (cardPicked) {
            setDeck([...auxDeck])
            pickCardCallBack(cardPicked)
        }
    }

    return (
        <>
            <div className={styles.deck} >
                {
                    deck?.map((card, index) => (
                        <Card
                            name={`${card.name}`}
                            suit={card.suit}
                            position={index}
                            isLast={index == deck.length - 1}
                            isInHand={false}
                            key={`${card.name}-${card.suit}`}
                        />
                    ))
                }
            </div>
            <p className={styles.lenDeck}>({deck.length})</p>
            <button className={styles.button} onClick={handlePickCard} disabled={deck.length == 0 ? 'disabled' : undefined}>Click to pick Card</button>
        </>

    )
}
import { useState } from "react"
import styles from "./Cards.module.scss"
import background from "../../assets/background-card.jpg"

export function Card({name,suit,position,isLast,isInHand}) {

    const [rotate,setRotate] = useState(false);

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

    const handleClick = () => {
        if (isInHand){
            setRotate(!rotate)
        }else{
            isLast?setRotate(!rotate):false
        }
    };

    return (
        <div className={styles.card} style={{transform:`translateX(-${position * 2}px)`,position:`${isInHand?"relative":"absolute"}`}}>
            <div className={`${styles.inner} ${rotate?styles.rotate:""}`} onClick={handleClick}>
                <div className={styles.front} style={{color:`${helperSuits[`${suit}`].color}`}}>
                    <p>{name}</p>
                    <p>{helperSuits[`${suit}`].simbol}</p>
                </div>
                <div className={styles.back}>
                    <img src={background} alt="background-card"/>
                </div>
            </div>
        </div>
    )
}
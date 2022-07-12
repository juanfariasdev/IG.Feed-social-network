import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.scss";

function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/juanfariasdev.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juan Pablo</strong>
                            <time title="12 de julho de 2022 as 8:41" dateTime='2022-07-12 8:41:52'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito Bom Devon, parabens!! </p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}


export { Comment }
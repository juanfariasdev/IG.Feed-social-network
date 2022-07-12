import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.scss";

interface IProps {
    content: string,
    onDeleteComment: Function,
    id: number
}
function Comment(props: IProps){

    function handleDeleteComment(){
        onDeleteComment(id);
    }

    const { id, content, onDeleteComment } = props;
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/juanfariasdev.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juan Pablo</strong>
                            <time title="12 de julho de 2022 as 8:41" dateTime='2022-07-12 8:41:52'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
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
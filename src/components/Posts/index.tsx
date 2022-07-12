import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.scss';

type Author = {
    avatarUrl: string,
    name: string,
    role: string
}
type Content = {
    type: string, 
    content: string
}
interface IProps {
    author: Author,
    content: Content[],
    publishedAt: Date
}
function Post(props:IProps){
    const { author, content, publishedAt } = props;
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>

            {content.map((line)=>{
                switch(line.type){
                    case 'paragraph':
                        return <p>{line.content}</p>
                    case 'link':
                        return <p><a href="#">{line.content}</a></p>
                    default:
                        return <span>{line.content}</span>
                }
            })}
           
        </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            placeholder="Deixe um comentário"
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>


        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </article>)
}

export { Post }
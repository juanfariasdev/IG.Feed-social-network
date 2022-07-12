import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import React, { ChangeEvent, Fragment, useState } from 'react';
import { Value } from 'sass';

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
    const [comments, setComments] = useState(["Opa, beleza?"]);
    const [newCommentText, setNewCommentText] = useState('');
    const { author, content, publishedAt } = props;
    
    function handleClickOnSubmit(){

        window.event?.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>){
        setNewCommentText(e.target.value);
    }
    
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

            {content.map((line, key)=>{
                let value;
                switch(line.type){
                    case 'paragraph':
                        value = <p>{line.content}</p>
                        break;
                    case 'link':
                        value = <p><a href="#">{line.content}</a></p>
                        break;
                    default:
                        value = <span>{line.content}</span>
                        break;
                }
                return <Fragment key={key}>{value}</Fragment>;
            })}
           
        </div>
        <form onSubmit={handleClickOnSubmit} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={(e)=> {handleNewCommentChange(e)}}
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>


        <div className={styles.commentList}>
            {comments.map((comment)=>(<Comment key={comment} content={comment}/>))}
        </div>
    </article>)
}

export { Post }
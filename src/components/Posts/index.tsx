import styles from './Post.module.scss';

function Post(){
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/juanfariasdev.png" />
                <div className={styles.authorInfo}>
                    <strong>Juan Farias</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="11 de julho de 2022 as 16:20" dateTime='2022-07-11 16:20:30'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href="">jane.design/doctorcare</a></p>
            <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
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

    </article>)
}

export { Post }
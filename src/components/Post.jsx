import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    < Avatar 
                        hasBorder 
                        src="https://github.com/ronipassion.png" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Roni Paixão</strong>
                        <span>Software Developer</span>
                    </div>
                </div>

                <time title="10/10/2024 às 13:10h" datetime="2024-10-10 13:10">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a className= {styles.link} href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a> {' '}
                    <a href='#'>#rocketseat</a> {' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea 
                    placeholder="Deixe o seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            < Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/68921376?v=4" alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Roni Paixão</strong>
                            <time title="10/10/2024 às 13:10h" datetime="2024-10-10 13:10">Publicado há 1 hora</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!</p>
                    <footer>
                        <button>
                            < ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
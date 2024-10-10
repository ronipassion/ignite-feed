import styles from './Post.module.css'

export function Post() {
    return (
        <article>
            <header className = {styles.post}>
            <div className = {styles.author}>
                <img
                    className= {styles.avatar} 
                    src="https://github.com/ronipassion.png" />
                <div className = {styles.authorInfo}>
                    <strong>Roni Paixão</strong>
                    <span>Software Developer</span>
                </div>
            </div>

            <time title= "10/10/2024 às 13:10h" datetime="2024-10-10 13:10">Publicado há 1 hora</time>
            </header> 
            
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}
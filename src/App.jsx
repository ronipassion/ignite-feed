import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import './global.css'

import Styles from './App.module.css'



export function App() {
  return (
    <div>
      < Header />

      <div className = {Styles.wrapper}>
       < Sidebar />
        <main>
          < Post
            author='Roni Paixão'
            content='Post teste'
          />
        </main>
      </div>
    </div>

  )
}


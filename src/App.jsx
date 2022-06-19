import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/juliofelipe.png',
      name: 'Julio Felipe',
      role: 'CTO @ Informach'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfa.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/oliveirahelena.png',
      name: 'Julio Felipe',
      role: 'CTO @ Informach'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera2'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfa2.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}


import { Header } from './components/Header';
import { Post } from './components/Posts';
import { Sidebar } from './components/Sidebar';


import styles from './styles/App.module.scss';

import './styles/global.scss';

const posts = [
  {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/juanfariasdev.png',
    name: 'Juan Farias',
    role: 'Project Manager'
  },
  content : [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-07-12 11:16:40')
},
{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/juanfariasdev.png',
    name: 'Erick Campos',
    role: 'Developer'
  },
  content : [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-07-12 11:16:40')
},
{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/juanfariasdev.png',
    name: 'Juan Farias',
    role: 'Project Manager'
  },
  content : [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-07-12 11:17:40')
},
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post)=>(

            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            
          ))}
        </main>
      </div>

    </div>
  )
}

export default App

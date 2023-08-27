import Link from 'next/link';
import Todo from '../components/todo';

export default async function PostPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //cache: 'force-cache',
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const postsJsx = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} style={{ width: '70%' }} key={post.id}>
        <div
          style={{
            width: '100%',
            background: 'white',
            padding: '10px',
            borderRadius: '10px',
            color: 'black',
            marginTop: '20px',
          }}
        >
          {' '}
          <h5>Poste:{post.id}</h5>
          <h1>{post.title}</h1>
          <p>{post.body}</p>{' '}
        </div>
      </Link>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}
    >
      {postsJsx}
      <div></div>
    </div>
  );
}

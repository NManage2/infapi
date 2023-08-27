export default async function PostDetails({ postId }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      // cache: 'force-cache',
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          width: '50%',
          background: 'white',
          padding: '10px',
          borderRadius: '10px',
          color: 'black',
          marginTop: '20px',
          marginLeft: '25%',
        }}
      >
        <h3 style={{ textAlign: 'right' }}>{post.id}</h3>
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}

import PostDetails from '@/app/components/postDetails';
import { Suspense } from 'react';

export default async function PostDetailsPage({ params }) {
  const postId = params.postid;
  const loadingJsx = (
    <div style={{ color: 'white' }}>
      <h3>Wait...</h3>
    </div>
  );
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'white' }}>post details</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

import Link from 'next/link';
import { metadata } from '../layout';

export default function Page() {
  return (
    <div>
      <h1>article page</h1>
      <Link href="/posts">
        <button>take me to posts page</button>
      </Link>
    </div>
  );
}

// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulate checking if the user is authenticated
    // In a real app, use cookies, session storage, or a backend check
    const password = sessionStorage.getItem('password');
    if (password !== '10603143') {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!authenticated) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Only accessible by users who know the shared password.</p>
    </div>
  );
}

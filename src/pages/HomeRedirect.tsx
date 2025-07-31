import { useEffect } from 'react';

const HomeRedirect = () => {
  useEffect(() => {
    // Redirect to the main PawnRace landing page
    window.location.href = 'https://pawnrace.vercel.app';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to PawnRace...</h1>
        <p className="text-muted-foreground">
          Taking you to the main website at{' '}
          <a 
            href="https://pawnrace.vercel.app" 
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            pawnrace.vercel.app
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeRedirect;
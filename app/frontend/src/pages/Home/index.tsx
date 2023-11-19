export function Home() {
  const googleLogin = () => {
    window.location.href = 'http://localhost:8080/auth/google/login';
  };
  return (
    <div>
      <button type="button" onClick={googleLogin}>
        google login
      </button>
    </div>
  );
}

export function Home() {
  const onClickGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google/login`;
  };

  return (
    <div>
      <button type="button" onClick={onClickGoogleLogin}>
        google login
      </button>
    </div>
  );
}

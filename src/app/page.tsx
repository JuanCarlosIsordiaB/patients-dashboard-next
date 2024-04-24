import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/create");
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

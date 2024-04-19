import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { playerId } = useParams();

  return (
    <>
      <h1>SinglePlayer</h1>
      <p>{playerId}</p>
    </>
  );
}

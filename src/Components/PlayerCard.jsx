import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/single-player/${player.id}");
  }

  return (
    <div className="bg-white shadow-md rounded-lg px-10 py-10">
      <img src={player.imageUrl} alt={player.name} className="rounded-md" />

      <div className="mt-4">
        <h1 className="text-lg uppercase font-bold">{player.name}</h1>
        <p className="mt-2 text-gray-600 text-sm">{player.breed}</p>
        <p className="mt-2 text-gray-600 text-sm">{player.status}</p>
      </div>
    </div>
  );
}

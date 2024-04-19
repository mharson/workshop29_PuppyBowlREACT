import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import PlayerCard from "../Components/PlayerCard";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  console.log(players);

  useEffect(() => {
    (async function () {
      const receivedPlayers = await fetchPlayers();
      setPlayers(receivedPlayers);
    })();
  }, []);
  return (
    <>
      {players.map((player) => {
        return <PlayerCard key={player.id} player={player} />;
      })}
    </>
  );
}

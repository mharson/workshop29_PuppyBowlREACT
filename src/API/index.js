const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT";

export async function fetchPlayers() {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if (result.success) {
      return result.data.players;
    }
  } catch (error) {
    console.log(error);
  }
}

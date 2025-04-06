import axios from "axios";

export async function updateCardStatus(status: string, id: string) {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const req = {
    id: id,
    status: status,
  };

  const response = await axios.post(
    "http://localhost:3000/api/updateCardStatus",
    req,
    config
  );
}

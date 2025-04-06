import axios from "axios";
import { toast } from "sonner";

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
  if (response.data.isSucess) {
    toast.success(response.data.message);
  } else {
    toast.error(response.data.message);
  }
}

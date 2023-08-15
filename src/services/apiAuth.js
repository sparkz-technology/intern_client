import Axios from "axios";
import { toast } from "react-hot-toast";
const API_URL = "http://localhost:8000/auth";

export async function signup(name, email, password) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  try {
    const response = await Axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });
    const data = response.data;
    toast.success(data.message);
    return { data, error: null };
  } catch (error) {
    toast.error(error.response.data.message || error.message);
    console.error("An error occurred:", error);
  }
}

import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    (this.remoteHostUrl = remoteHostUrl), (this.token = null);
  }

  setToken(token) {
    this.token = token;
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || String(err) };
    }
  }

  async loginUser(credentials) {
    return await this.request({
      endpoint: "auth/login",
      method: "POST",
      data: credentials,
    });
  }

  async registerUser(credentials) {
    return await this.request({
      endpoint: "auth/register",
      method: "POST",
      data: credentials,
    });
  }
}

export default new ApiClient(
  //   process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
  "http://localhost:3001"
);

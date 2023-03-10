import Client from "../models/Client";

export default class ClientService {
  public static async getAllClients(): Promise<Client[]> {
    return await fetch("http://localhost:3004/clients/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  public static async getClientById(idClient: number): Promise<Client> {
    return await fetch(`http://localhost:3004/clients/${idClient}`).then(
      (response) =>
        response
          .json()
          .then((data) => (this.isEmpty(data) ? null : data))
          .catch((error) => this.error(error))
    );
  }

  public static async createClient(Client: Client): Promise<Client> {
    return await fetch(`http://localhost:3004/clients`, {
      method: "POST",
      body: JSON.stringify(Client),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  private static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  private static error(error: Error): void {
    console.error(error);
  }
}

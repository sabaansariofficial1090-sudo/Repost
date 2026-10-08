import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6ac372620001c9a093d8");

export const account = new Account(client);

export { ID };

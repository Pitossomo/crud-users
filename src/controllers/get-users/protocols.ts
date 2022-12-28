import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(req: Request, res: Response): Promise<HttpResponse<User[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}
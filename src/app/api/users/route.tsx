import { NextResponse } from "next/server";
import sampleData from "@/mockData/usersList";

export async function GET(req: Request, res: Response) {
  return NextResponse.json(sampleData);
}

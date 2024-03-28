import { NextRequest, NextResponse } from "next/server";
import sampleData from "@/mockData/usersList";

type Params = {
  id1: string;
};

export async function GET(
  req: NextRequest,
  context: { params: Params },
  res: NextResponse
) {
  const { id1 } = context.params;
  console.log("id value......", id1);
  const searchparams = req.nextUrl.searchParams;
  console.log("search params is", searchparams);
  const q = searchparams.get("q") || "";
  console.log("q is .....", q);
  const dynamicSegment = req.url.split("/").pop() ?? "";
  const id = parseInt(dynamicSegment);
  const data = sampleData.find((d) => d.id === id);

  return NextResponse.json(data);
}

import { NextRequest, NextResponse } from "next/server";
import sampleData from "@/mockData/usersList";

type Params = {
  id: number;
};

export async function GET(
  req: NextRequest,
  context: { params: Params },
  res: NextResponse
) {
  const id = Number(context.params.id);

  // const dynamicSegment = req.url.split("/").pop() ?? "";
  // const id = parseInt(dynamicSegment);
  const data = sampleData.find((d) => d.id === id);

  return NextResponse.json(data);
}

export async function DELETE(req: Request) {}

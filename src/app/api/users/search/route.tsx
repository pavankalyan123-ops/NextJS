import { NextRequest, NextResponse } from "next/server";
import sampleData from "@/mockData/usersList";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  console.log("search params is ......", searchParams);
  const query = searchParams.get("q");

  console.log("query is ....", query);

  const filterData = sampleData.filter((data) =>
    data.name.toLowerCase().includes(query ? query.toLowerCase() : "")
  );
  return NextResponse.json(filterData);
}

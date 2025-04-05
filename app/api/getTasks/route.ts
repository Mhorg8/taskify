import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  if (!id && typeof id !== "string") {
    return NextResponse.json(
      {
        message: "ID is reqired, and ID shuold be string",
        isSucces: false,
        data: null,
      },
      { status: 200 }
    );
  }

  const currentUser = await client.user.findFirst({
    where: { id: id as string },
    include: { cards: true },
  });

  if (!currentUser) {
    return NextResponse.json(
      {
        message: "User not founded pls try again",
        isSucces: false,
        data: null,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        message: "User founded successffully",
        isSucces: true,
        data: currentUser,
      },
      { status: 200 }
    );
  }
}

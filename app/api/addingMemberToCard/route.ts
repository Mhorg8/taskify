import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    email,
    username,
    cardId,
  }: { email: string; username: string; cardId: string } = await req.json();
  // check email isExist
  if (!email) {
    return NextResponse.json(
      { message: "Email is required", isSucess: false, data: null },
      { status: 200 }
    );
  }
  //  check username isExist
  if (!username) {
    return NextResponse.json(
      { message: "Username is required", isSuccess: false, data: null },
      { status: 200 }
    );
  }
  //   check cardId isExist
  if (!cardId) {
    return NextResponse.json(
      { message: "Username is required", isSuccess: false, data: null },
      { status: 200 }
    );
  }

  const currentUser = await client.user.findFirst({
    where: {
      Email: email,
    },
  });

  if (!currentUser) {
    return NextResponse.json(
      { message: "User not found", isSuccess: false, data: null },
      { status: 200 }
    );
  }
}

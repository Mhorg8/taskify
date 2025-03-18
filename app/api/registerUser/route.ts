import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    if (!email || !username || !password) {
      return NextResponse.json(
        {
          data: null,
          isSuccess: false,
          message: "Credential not provided. Please try again",
        },
        { status: 200 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          data: null,
          isSuccess: false,
          message: `Password should be greater than 6 char, ${password}`,
        },
        { status: 200 }
      );
    }

    const isExist = await client.user.findUnique({
      where: {
        Email: email as string,
      },
    });

    if (isExist) {
      return NextResponse.json(
        {
          data: null,
          isSuccess: false,
          message: `User already exist , ${email}`,
        },
        { status: 200 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await client.user.create({
      data: {
        Email: email as string,
        Username: username as string,
        Password: hashedPassword as string,
      },
    });

    return NextResponse.json(
      {
        data: newUser,
        isSuccess: true,
        message: "Create Account successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, isSuccess: false, message: "Something went wrong!!" },
      { status: 500 }
    );
  }
}

import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const cardId = formData.get("cardId") as string;

  // Validate required fields
  if (!email) {
    return NextResponse.json(
      { message: "Email is required", isSuccess: false, data: null },
      { status: 400 }
    );
  }
  if (!username) {
    return NextResponse.json(
      { message: "Username is required", isSuccess: false, data: null },
      { status: 400 }
    );
  }
  if (!cardId) {
    return NextResponse.json(
      { message: "Card ID is required", isSuccess: false, data: null },
      { status: 400 }
    );
  }

  try {
    // Check if the card exists
    const currentCard = await client.card.findUnique({
      where: {
        id: cardId,
      },
      include: {
        users: true,
      },
    });

    if (!currentCard) {
      return NextResponse.json(
        { message: "Card not found", isSuccess: false, data: null },
        { status: 404 }
      );
    }

    // Check if the user already exists
    let currentUser = await client.user.findUnique({
      where: {
        Email: email,
      },
    });

    // If the user doesn't exist, create a new user
    if (!currentUser) {
      return NextResponse.json(
        { message: "User not founded", isSucess: false, data: null },
        { status: 200 }
      );
    }

    // Associate the user with the card
    await client.card.update({
      where: {
        id: cardId,
      },
      data: {
        users: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    });

    // Fetch the updated card with associated users
    const updatedCard = await client.card.findUnique({
      where: {
        id: cardId,
      },
      include: {
        users: true,
      },
    });

    return NextResponse.json(
      {
        message: `User added to ${currentCard.task} successfully`,
        isSuccess: true,
        data: updatedCard,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "An error occurred while processing your request",
        isSuccess: false,
        data: null,
      },
      { status: 500 }
    );
  }
}

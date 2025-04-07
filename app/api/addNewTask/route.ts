import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { task, id } = await req.json();

  if (!task) {
    return NextResponse.json(
      {
        message: "Task message is required.",
        isSucess: false,
        data: null,
      },
      { status: 200 }
    );
  }

  if (!id) {
    return NextResponse.json(
      {
        message: "Card ID is not provided. Please try again.",
        isSucess: false,
        data: null,
      },
      { status: 200 }
    );
  }

  try {
    const updatedCard = await client.card.update({
      where: { id },
      data: {
        tasks: {
          create: {
            task: task as string,
            status: false,
          },
        },
      },
      include: {
        tasks: true,
      },
    });

    return NextResponse.json(
      {
        message: "Task successfully added to card.",
        isSucess: true,
        data: updatedCard,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating card:", error);
    return NextResponse.json(
      {
        message: "Failed to update card and add task.",
        isSucess: false,
        data: null,
      },
      { status: 500 }
    );
  }
}

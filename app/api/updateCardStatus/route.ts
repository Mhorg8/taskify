import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id, status } = await req.json();

  if (!id) {
    return NextResponse.json(
      { message: "id is required", isSucess: false, data: null },
      { status: 200 }
    );
  }
  if (!status) {
    return NextResponse.json(
      { message: "status is required", isSucess: false, data: null },
      { status: 200 }
    );
  }

  const currentCard = await client.card.findFirst({
    where: { id: id as string },
  });

  if (!currentCard) {
    return NextResponse.json(
      {
        message: "Card not founded, pls cheack card id.",
        isSucess: false,
        data: null,
      },
      { status: 200 }
    );
  }

  if (currentCard.status === status) {
    return NextResponse.json(
      { message: "Nothing changed", isSucess: false, data: null },
      { status: 200 }
    );
  } else {
    await client.card.update({
      where: { id: id as string },
      data: {
        status: status as string,
      },
    });

    return NextResponse.json({
      message: `${currentCard.task} sucessfully updated`,
      isSucess: true,
      data: currentCard,
    });
  }
}

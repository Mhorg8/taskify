import client from "@/lib/prisma";
import { Task } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id }: { id: string } = await req.json();

  if (!id) {
    return NextResponse.json(
      {
        message: "Id is Required",
        isSucess: false,
        data: null,
      },
      { status: 200 }
    );
  }

  const isExist = await client.card.findFirst({
    where: {
      id,
    },
  });

  if (!isExist) {
    return NextResponse.json(
      {
        message: "Task not found",
        isSucess: false,
        data: null,
      },
      { status: 200 }
    );
  }

  const deletedTask: Task = await client.card.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(
    {
      message: "Task deleted successfully",
      isSucess: true,
      data: deletedTask,
    },
    { status: 200 }
  );
}

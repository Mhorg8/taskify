import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, description, members } = body;

  if (!name) {
    return NextResponse.json(
      { message: "name is required", isSucess: false, data: null },
      { status: 200 }
    );
  }
  if (!description) {
    return NextResponse.json(
      { message: "description is required", isSucess: false, data: null },
      { status: 200 }
    );
  }

  const isExist = await client.card.findUnique({
    where: {
      task: name,
    },
  });

  if (isExist) {
    return NextResponse.json(
      { message: "Task already exist", isSucess: false, date: null },
      { status: 200 }
    );
  }

  const newTask = await client.card.create({
    data: {
      task: name,
      description,
      status: "created",
    },
  });

  const allTask = await client.card.findMany();

  return NextResponse.json(
    {
      message: "card added successfully",
      isSucess: true,
      task: newTask,
    },
    { status: 200 }
  );
}

export async function GET() {
  const allTask = await client.card.findMany();

  if (allTask.length === 0) {
    return NextResponse.json(
      {
        message: "No task found",
        isSucess: false,
        data: null,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    {
      message: "All task fetched successfully",
      isSucess: true,
      tasks: allTask,
    },
    { status: 200 }
  );
}

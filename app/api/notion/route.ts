import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { subscribers } from "@/lib/db/schema";

export async function POST(request: Request) {
  const body = await request.json();
  
  try {
    const result = await db.insert(subscribers).values({
      name: body?.name,
      email: body?.email,
    }).returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to add subscriber to database");
    }

    return NextResponse.json({ success: true, data: result[0] }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    
    // Handle unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes("unique")) {
      return NextResponse.json(
        { success: false, error: "Email already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
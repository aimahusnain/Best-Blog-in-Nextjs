import prisma from "@/src/database";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
  try {
    const getPostData = await request.json()

    const createPost = await prisma.contact.create({
      data: getPostData
    })

    if (createPost) {
      return NextResponse.json({
        success: true,
        message: 'New blog post created successfully!'
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Something went wrong, please try again!'
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      success: false,
      message: 'Something went wrong, please try again!'
    })
  }
}
"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { RequestSchema } from "@/schemas";
import { auth } from "@/auth";

// Helper to get current session user
const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const createRequest = async (values: z.infer<typeof RequestSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const validatedFields = RequestSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { companyName, companyWebsite, roleType, message, budgetRange } = validatedFields.data;

  try {
    await db.employerRequest.create({
      data: {
        userId: user.id as string,
        companyName,
        companyWebsite,
        roleType,
        message,
        budgetRange,
      },
    });

    return { success: "Request submitted!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const getRequests = async () => {
  const user = await currentUser();

  if (!user || user.role !== "ADMIN") {
    return { error: "Unauthorized" };
  }

  try {
    const requests = await db.employerRequest.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    return { success: requests };
  } catch (error) {
    return { error: "Failed to fetch requests" };
  }
};

export const getEmployerRequests = async () => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  try {
    const requests = await db.employerRequest.findMany({
      where: {
        userId: user.id as string,
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    return { success: requests };
  } catch (error) {
    return { error: "Failed to fetch requests" };
  }
};

export const updateRequestStatus = async (id: string, status: string) => {
  const user = await currentUser();

  if (!user || user.role !== "ADMIN") {
    return { error: "Unauthorized" };
  }

  try {
    await db.employerRequest.update({
      where: { id },
      data: { status },
    });
    return { success: "Status updated!" };
  } catch (error) {
    return { error: "Failed to update status" };
  }
};

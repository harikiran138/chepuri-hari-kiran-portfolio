/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const db = new PrismaClient();

async function main() {
  if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.includes("mongodb")) {
    console.error("❌ Error: Valid MongoDB DATABASE_URL not found in .env");
    console.error("Please update .env with your MongoDB connection string.");
    process.exit(1);
  }

  const password = await bcrypt.hash("admin123", 10);

  try {
    const existingAdmin = await db.user.findUnique({
      where: { email: "admin@example.com" },
    });

    if (!existingAdmin) {
      await db.user.create({
        data: {
          name: "Admin User",
          email: "admin@example.com",
          password,
          role: "ADMIN",
        },
      });
      console.log("✅ Admin user created: admin@example.com / admin123");
    } else {
      console.log("ℹ️ Admin user already exists.");
    }
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const db = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin123", 10);

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
    console.log("Admin user created: admin@example.com / admin123");
  } else {
    console.log("Admin user already exists.");
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

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false, // عايز تشوف الـ queries اعملها true
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB Connected Successfully");

    // sync({ alter: true }) بيعمل update للجداول لو اتغيرت
    // sync({ force: true }) بيمسح ويعيد إنشاء كل الجداول (خطر في production)
    await sequelize.sync({ alter: true });
    console.log("✅ All Models Synced");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    process.exit(1);
  }
};

import User from "../models/User";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

type AuthInput = {
  email: string;
  password: string;
};

//register
export const register = async ({ email, password }: AuthInput) => {
  if (!email || !password) {
    throw new Error("Todos los campos son obligatorios");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  const { password: _, ...userWithoutPassword } = user.toObject();

  return {
    success: true,
    message: "Usuario registrado",
    data: userWithoutPassword,
  };
};

//login
export const login = async ({ email, password }: AuthInput) => {
  if (!email || !password) {
    throw new Error("All fields are required!");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user._id.toString());

  return {
    success: true,
    message: "Login exitoso",
    data: { token },
  };
};

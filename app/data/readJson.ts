import fs from "fs";
import path from "path";

export function readJson<T>(relativePath: string): T {
    const filePath = path.join(process.cwd(), "app", "data",relativePath);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T;
}
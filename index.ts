import fs from "fs";

for (let i = 0; i < 8; i++) {
  fs.mkdirSync(`./challenge${i + 1}/`, { recursive: true });
  for (const lang of ["ts", "c", "py", "java"]) {
    fs.writeFileSync(`./challenge${i + 1}/challenge${i + 1}.${lang}`, "");
  }
}

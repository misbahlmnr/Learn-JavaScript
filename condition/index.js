const isMarried = false;

// 1. if else
if (isMarried) {
  console.log("Anda sudah menikah");
} else {
  console.log("Anda belum menikah");
}

// 2. if else if
if (isMarried) {
  console.log("Anda sudah menikah");
} else if (!isMarried) {
  console.log("Anda belum menikah");
} else {
  console.log("Anda belum menikah");
}

// 3. switch
const userRole = "admin";
switch (userRole) {
  case "admin":
    console.log("Anda admin");
    break;
  default:
    console.log("Anda user biasa");
    break;
}

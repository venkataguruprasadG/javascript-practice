let role = "admin";

switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "editor":
        console.log("Edit Access");
        break;
    case "user":
        console.log("View Acess");
        break;
    default:
        console.log("Invalid User coming to login... check him out... catch him....No Access for you ....");
}
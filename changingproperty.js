let outerdiv = document.createElement("div");
outerdiv.id = "outerdiv";

let innerdiv = document.createElement("div");
innerdiv.id = "innerdiv";
innerdiv.textContent =
  "A wedding planner is a professional who assists with the design, planning and management of a client's wedding. Weddings are significant events in people's lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding planners are often used by couples who work long hours and have little spare time available for sourcing and managing wedding venues and wedding suppliers.";

outerdiv.append(innerdiv);
document.body.append(outerdiv);

function apply() {
  outerdiv.style.border = "1px solid";
  innerdiv.style.marginTop = "50px";
}

document.body.onload(apply());

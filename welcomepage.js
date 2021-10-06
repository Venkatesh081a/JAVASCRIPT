let divElement = document.createElement("div");
divElement.setAttribute("id", "input");

let heading = document.createElement("h1");
heading.textContent = "Welcome Page";
heading.style.textAlign = "center";
heading.style.marginTop = "100px";

let Namelabel = document.createElement("label");
Namelabel.textContent = "Name :";
Namelabel.style.marginLeft = "500px";

let Name = document.createElement("input");
Name.setAttribute("type", "text");
Name.setAttribute("placeholder", "Enter your Name");
Name.setAttribute("id", "name");
Name.style.marginLeft = "20px";

let post = document.createElement("button");
post.setAttribute("id", "post");
post.textContent = "Post";
post.style.marginLeft = "600px";
post.style.marginTop = "30px";

let divOutput = document.createElement("div");
divOutput.setAttribute("id", "result");

let heading2 = document.createElement("h2");
heading2.style.marginLeft = "550px";
heading2.style.marginTop = "50px";

divOutput.append(heading2);
divElement.append(heading);
divElement.append(Namelabel);
divElement.append(Name);
divElement.append(document.createElement("br"));
divElement.append(post);
document.body.append(divElement);

post.addEventListener("click", function () {
  let NameContent = Name.value;
  heading2.textContent = `Welcome ${NameContent}`;
  document.body.append(divOutput);
});

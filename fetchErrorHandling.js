console.log("Nameste");


async function getUser() {
  console.log("Hello 1");
  try {
    // fetch returns a promise in response object, so we have to convert it into a json
    const data = await fetch("https://api.github.com/users/vikash-saini/");

    // json also a promise
    const Jsondata = await data.json();
    console.log(Jsondata);
  } catch (error) {
    console.log(error);
    console.log("there is a error");
  }
}

getUser();
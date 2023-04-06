async function test() {
  let gujarat = new Promise((resolve) => {
    setTimeout(() => {
      resolve("20deg");
    }, 2000);
  });

  let MP = new Promise((resolve) => {
    setTimeout(() => {
      resolve("40deg");
    }, 5000);
  });

  console.log("Fetching gujarat wether...");
  let gujw = await gujarat;
  console.log("gujarat wether is :" + gujw);

  console.log("Fetching MP wether...");
  let MPW = await MP;
  console.log("MP wether is :" + MPW);
}

const west = async () => {
  console.log("No Waiting...");
};

const all =  () => {
  console.log("Welcome tho wether control room");
  test();
  west();
};

all();

function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dhananjay"), 3000);
    });
}

async function showName() {
    console.log("Wait.........")
    const name = await fetchName(); // waits for promise to finish
    console.log("Name is:", name);
    
}

showName();
console.log("Still Waiting.......")


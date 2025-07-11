function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Sidharth"), 1000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 1000);
    });
}

async function runApp() {
    const loginMessage = await loginUser();
    console.log(loginMessage);

    const dashboard = await fetchDashboard();
    console.log(dashboard);
}

runApp();

const isLoggedIn = false;

function App() {
    return (
        <div>
            {isLoggedIn ? "Welcome" : "Please Login"}
        </div>
    );
}

const isPremium = true;

function challenge2() {
    return (
        <div>
            {isPremium && <button>Download PDF</button>}
        </div>
    );
}

const age = 16;
function challenge3() {
    return (
        <div>
            {age >= 18 ? <h1>Adult</h1> : <h1>Minor</h1>}
        </div>
    );
}
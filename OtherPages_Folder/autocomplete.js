let availableKeywords = [
    'Dogs',
    'Cats',
    'Pigs',
    'Rabbit',
    'More pets',
    'Cute pets',
    'pets to adopt',
    'Dog breeds',
    'German shephard dog',
    'Bull dog',
    'French bulldog'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick='selectInput(this)'>" + list + "</li>";
    }).join(""); // Join the array into a single string

    resultBox.innerHTML = "<ul>" + content + "</ul>"; // Correct assignment
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}
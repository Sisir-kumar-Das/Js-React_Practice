function capitalizeWords(sentence) {
    // Your implementation
    const capitalized = sentence
        .trim()                   // 1. Removes leading/trailing spaces
        .split(/\s+/)             // 2. Collapses and splits multiple spaces/tabs
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    console.log(capitalized)

    return capitalized;

}

capitalizeWords("hello world");
module.exports = capitalizeWords
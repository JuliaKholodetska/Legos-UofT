export const defaultEditorsValue = {
    firstDefault: "def greet(name):\n \\\ \n This function greets to\n the person passed in as\n a parameter\n \\\ \n print('Hello, ' + name + '. Good morning!')\n\n\n\n\n\n\n\n\n\n\n\n\n",
    secondDefault: "print(Hello world)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    thirdDefault: "option to do\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
}

export const completions = [
    { label: "health", type: "keyword" },
    { label: "home", type: "keyword" },
    { label: "care", type: "constant", info: "Test completion" },
    { label: "cat", type: "constant", info: "Test completion" },
    { label: "rule", type: "constant", info: "Test completion" },
    { label: "software", type: "variable" },
]

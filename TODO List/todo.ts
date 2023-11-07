import inquirer from "inquirer"

//todos array = done
//function = done
//operation

let todos: string[] = ["jami ", "ali"]

async function create_todo(todos: string[]) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["add", "update", "view", "delete","Exit"]
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item..",
                name: "todo",
            });
            todos.push(addTodo.todo)
            console.log(todos);
        }

        if (ans.select == "update") {
            let uptadeTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item)
            })
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item..",
                name: "todo",

            });

            let newTodos = todos.filter(val => val !== uptadeTodo.todo)
            todos = [...newTodos, addTodo.todo]
            console.log(todos)
        }

        if (ans.select == "veiw") {
            console.log(todos);

        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select items for delete",
                name: "todo",
                choices: todos.map((item) => item)
            })

            let newTodos = todos.filter((val) => val !== deleteTodo.todo)
            todos = [...newTodos]
            console.log(todos);
        }
        if(ans.select=="Exit"){
            break
        }

    } while (true);
}
create_todo(todos);
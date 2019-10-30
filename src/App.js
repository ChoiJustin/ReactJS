const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [ 
        React.createElement("h1", {}, name), 
        React.createElement("h2", {}, animal), 
        React.createElement("h3", {}, breed)
    ]);
}


const App = () => {
    return React.createElement("div", {id: "something-important"}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Noru", 
            animal: "Dog", 
            breed: "Pekingese"
        }),
        React.createElement(Pet, {
            name: "Pumpkin",
            animal: "Cat", 
            breed: "Orange"
        }),
        React.createElement(Pet, {
            name: "Clover", 
            animal: "Dog", 
            breed: "Havanese"
        }),
    ]);
};

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);
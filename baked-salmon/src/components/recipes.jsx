const Recipes = () => {
    return <div>
        <div>
            <h1>Delicious Recipes</h1>
            <Recipe name={"Baked Salmon"}/>
        </div>
    </div>
}

export default Recipes

const Recipe = ( {name} ) => {
    return (
        <div style={{
            border: "1px dotted orange",
            padding: 8
        }}>
            <h3>{name}</h3>

            <RecipeList/>
        </div>
    )
}

const RecipeList = () => {

    const ingriedents = [
         { "name": "Salmon", "amount": 1, "measurement": "lb" },
            { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
            { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
            { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
            { "name": "Garlic", "amount": 3, "measurement": "cloves" }
    ]

    return   <ul>
        {
            ingriedents.map((ingredient) => {
                return <RecipesIngredient name={ingredient.name} amount={ingredient.amount} measurement={ingredient.measurement} />
            })
        }
</ul>
}

const RecipesIngredient = (props) => {
    return <li>{props.amount} {props.measurement} {props.name} </li>
}
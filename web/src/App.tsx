interface ButtonProps {
    text?: String; // Colocando a propriedade como opcional e string
}

function Button(props: ButtonProps) {
    return <button>{props.text ?? "Default"}</button> // Recebendo uma string, ou caso não seja enviado, coloca "Default"
}

function App() {
    return (
        <div>
            <Button text="Enviar"></Button>
            <Button text="OK"></Button>
            <Button/>
        </div>
    )
}

export default App

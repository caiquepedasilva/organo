import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Name" placeholder="Digite sue nome" />
                <CampoTexto label="Cargo" placeholder="Digite sue cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario
import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li> 
                    <a href='https://www.facebook.com/caiquepedasilva' target="_blank">
                        <img src='../../imagens/fb.png' alt='Facebook' />
                    </a>
                </li>
                <li> 
                    <a href='https://twitter.com/caiquemaverik2' target="_blank">
                        <img src='../../imagens/tw.png' alt='Twitter' />
                    </a>
                </li>
                <li> 
                    <a href='https://www.instagram.com/caiquepe.dasilva/' target="_blank">
                        <img src='../../imagens/ig.png' alt='Instagram' />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='imagens/logo.png' alt='Logo' />
        </section>
        <section>
            <p>
                Desenvolvido por Aluno
            </p>
        </section>
    </footer>
    )
}

export default Rodape
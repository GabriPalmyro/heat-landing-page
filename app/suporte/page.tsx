import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Suporte - Heat Game",
  description: "Encontre soluções para problemas comuns, perguntas frequentes e como entrar em contato com nossa equipe de suporte.",
}

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Suporte — Heat Game 🔥
          </h1>
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Última atualização:</strong> 23/05/2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              Se você está tendo problemas ou tem perguntas sobre o <strong className="text-orange-500">Heat App</strong>, 
              estamos aqui para ajudar! Siga as instruções abaixo para encontrar soluções, entrar em contato conosco ou 
              relatar qualquer problema.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">1. Problemas Comuns e Soluções</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.1 Problemas de Login</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Erro no login</strong>: Certifique-se de que sua conexão 
                        com a internet está funcionando corretamente. Se estiver usando o login do Google ou Apple, 
                        verifique se está com a conta correta conectada.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Não consigo acessar minha conta</strong>: Se você esqueceu 
                        a senha ou não consegue acessar a conta, tente redefinir sua senha ou entre em contato com nossa 
                        equipe de suporte.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.2 Erros no Jogo</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Problemas de desempenho</strong>: Caso o jogo esteja com 
                        baixo desempenho, tente fechar outros aplicativos em segundo plano ou reiniciar seu dispositivo.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Erro de carregamento de conteúdo</strong>: Se o conteúdo não 
                        carregar corretamente, tente verificar se sua conexão com a internet está estável.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.3 Problemas de Pagamento</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Problemas com assinatura Premium</strong>: Se você tiver 
                        dificuldades para acessar os recursos Premium após a compra, tente sair e entrar novamente na 
                        sua conta ou entre em contato com nossa equipe para suporte.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">2. Como Entrar em Contato Conosco</h2>
              
              <p className="mb-6">
                Se você não encontrou uma solução para o seu problema ou tem outras dúvidas, nossa equipe de suporte 
                está disponível para ajudá-lo. Siga os passos abaixo para entrar em contato:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">2.1 E-mail de Suporte</h3>
                <p className="mb-4">Envie um e-mail detalhando o seu problema ou pergunta para o seguinte endereço:</p>
                
                <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20 mb-6">
                  <p className="text-center">
                    <strong className="text-orange-500">E-mail de Suporte</strong>:{" "}
                    <a 
                      href="mailto:suporte@heatgame.com.br?subject=Suporte Heat App"
                      className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                    >
                      suporte@heatgame.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">2.2 Informações Importantes para Suporte</h3>
                <p className="mb-4">
                  Quando entrar em contato conosco, por favor, forneça as seguintes informações para que possamos 
                  ajudá-lo de maneira mais eficiente:
                </p>
                
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-300">
                    <li>• Descrição do problema ou dúvida.</li>
                    <li>• O modelo do seu dispositivo e versão do sistema operacional (iOS ou Android).</li>
                    <li>• Captura de tela ou qualquer outro detalhe que possa ajudar a entender o problema.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">3. Perguntas Frequentes (FAQ)</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.1 Posso jogar sozinho ou apenas com amigos?</h3>
                  <p>
                    Sim, você pode jogar sozinho ou com amigos. O <strong className="text-orange-500">Heat App</strong> oferece 
                    diferentes modos de jogo para jogar individualmente ou em grupo.
                  </p>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.2 Como posso atualizar o aplicativo?</h3>
                  <p>
                    Para atualizar o Heat, vá até a <strong className="text-orange-500">App Store</strong> ou{" "}
                    <strong className="text-orange-500">Google Play Store</strong>, procure pelo app e clique em "Atualizar".
                  </p>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.3 Onde posso ver minha assinatura Premium?</h3>
                  <p>
                    Se você se inscreveu na assinatura Premium, pode ver os detalhes da sua assinatura em{" "}
                    <strong className="text-orange-500">Configurações</strong> &gt;{" "}
                    <strong className="text-orange-500">Assinaturas</strong> no seu dispositivo.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Política de Privacidade</h2>
              <p>
                Para saber como protegemos suas informações pessoais, consulte nossa{" "}
                <a 
                  href="/politicas-de-privacidade" 
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Política de Privacidade
                </a>{" "}
                dentro do aplicativo ou no nosso site oficial.
              </p>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg text-center space-y-4">
              <p>
                <strong>Nota</strong>: Estamos constantemente trabalhando para melhorar o{" "}
                <strong className="text-orange-500">Heat App</strong> e garantir a melhor experiência possível para nossos usuários. 
                Agradecemos por escolher o Heat e esperamos que continue se divertindo!
              </p>
              
              <p className="text-orange-400 font-semibold">
                <strong>Dúvidas?</strong> Entre em contato com a nossa equipe de suporte e ficaremos felizes em ajudar!
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500">
                <strong>Heat Game</strong> © Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

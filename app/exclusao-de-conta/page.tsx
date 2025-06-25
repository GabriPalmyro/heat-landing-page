import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Solicitação de Exclusão de Conta - Heat Game",
  description: "Saiba como solicitar a exclusão da sua conta no Heat Game e o que acontece com seus dados.",
}

export default function AccountDeletionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Solicitação de Exclusão de Conta — Heat Game 🔥
          </h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              Se você deseja <strong className="text-orange-500">excluir sua conta</strong> no{" "}
              <strong className="text-orange-500">Heat App</strong>, por favor, siga as instruções abaixo.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Como Solicitar a Exclusão da Sua Conta:</h2>
              
              <p className="mb-4">
                Para iniciar o processo de exclusão da sua conta, envie um e-mail para o seguinte endereço:
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20 mb-6">
                <p className="text-center">
                  <strong className="text-orange-500">E-mail</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Solicitação de Exclusão de Conta"
                    className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
              </div>

              <p className="mb-4">No e-mail, inclua as seguintes informações:</p>
              
              <div className="bg-gray-900/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">• Assunto:</h4>
                  <p className="ml-4 text-gray-300">Solicitação de Exclusão de Conta</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">• Corpo do E-mail:</h4>
                  <ul className="ml-4 space-y-2 text-gray-300">
                    <li>- Nome completo</li>
                    <li>- E-mail associado à conta que deseja excluir</li>
                    <li>- Qualquer outra informação relevante (se necessário)</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">O que Acontece Após a Solicitação:</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-lg">•</span>
                  <p>
                    Após recebermos sua solicitação, nossa equipe processará o pedido de exclusão de sua conta.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-lg">•</span>
                  <p>
                    Você receberá uma confirmação por e-mail dentro de{" "}
                    <strong className="text-orange-500">7 dias úteis</strong> informando que sua conta foi excluída com sucesso.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-lg">•</span>
                  <p>
                    Após a exclusão, <strong className="text-orange-500">todos os dados associados à sua conta serão apagados</strong>, 
                    incluindo histórico, configurações e preferências.
                  </p>
                </li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Importante:</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold text-lg">•</span>
                  <p>
                    <strong className="text-red-400">A exclusão é permanente</strong> e não pode ser revertida. 
                    Após a exclusão, você perderá o acesso ao aplicativo e todos os dados relacionados à sua conta.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold text-lg">•</span>
                  <p>
                    Se você mudar de ideia após solicitar a exclusão, <strong className="text-red-400">não será possível 
                    recuperar sua conta</strong> ou os dados associados a ela.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                <p className="mb-4">
                  Se você tiver alguma dúvida ou preocupação, não hesite em entrar em contato conosco pelo e-mail acima.
                </p>
                <p className="text-orange-400">
                  Agradecemos por ter usado o <strong>Heat App</strong>. Se decidir voltar no futuro, será um prazer tê-lo de volta!
                </p>
              </div>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-sm text-gray-400">
                <strong>Nota</strong>: Este processo de exclusão está em conformidade com as leis de proteção de dados 
                aplicáveis, como o <strong className="text-orange-500">GDPR</strong> e a{" "}
                <strong className="text-orange-500">LGPD</strong>.
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

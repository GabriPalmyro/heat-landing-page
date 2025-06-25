import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Política de Privacidade - Heat Game",
  description: "Conheça nossa política de privacidade e como protegemos seus dados no Heat Game.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Política de Privacidade — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇧🇷 PT</span>
              <a 
                href="/en/privacy-policy" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇺🇸 EN
              </a>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Última atualização:</strong> 13/05/2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg">
              Nós, do <strong className="text-orange-500">Heat App</strong>, respeitamos sua privacidade e estamos 
              comprometidos em proteger as informações pessoais que você compartilha conosco. Esta{" "}
              <strong className="text-orange-500">Política de Privacidade</strong> descreve como coletamos, usamos, 
              protegemos e divulgamos suas informações ao usar nosso aplicativo. Ao acessar ou usar o Heat, você 
              concorda com esta Política de Privacidade.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">1. Informações que Coletamos</h2>
              <p>Nós coletamos as seguintes informações quando você usa o Heat:</p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">1.1 Informações Pessoais</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Nome Completo</strong>: Quando você se registra ou se conecta usando o{" "}
                  <strong>Sign In with Apple</strong> ou <strong>Google</strong>, podemos coletar seu nome completo.
                </li>
                <li>
                  <strong>E-mail</strong>: Coletamos seu endereço de e-mail quando você se registra ou faz login 
                  para que possamos fornecer serviços relacionados à sua conta.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">1.2 Informações de Uso</h3>
              <p>Coletamos informações relacionadas ao uso do aplicativo, como:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Dados sobre a sua interação com o aplicativo.</li>
                <li>Informações sobre seu dispositivo, como modelo, sistema operacional, identificadores de dispositivo.</li>
                <li>Dados de localização (se o recurso for ativado e permitido).</li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">2. Como Usamos Suas Informações</h2>
              <p>Usamos as informações coletadas para os seguintes fins:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Para fornecer e manter os serviços do Heat.</li>
                <li>Para personalizar sua experiência no aplicativo e melhorar nosso conteúdo.</li>
                <li>Para enviar notificações, promoções e outras comunicações relevantes.</li>
                <li>Para garantir a segurança e integridade do aplicativo.</li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">3. Compartilhamento de Informações</h2>
              <p>
                Nós <strong>não compartilhamos</strong> suas informações pessoais com terceiros, exceto nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Provedores de serviços</strong>: Podemos compartilhar suas informações com prestadores de 
                  serviços terceirizados que ajudam a fornecer ou melhorar os nossos serviços (como provedores de 
                  armazenamento de dados ou ferramentas de autenticação).
                </li>
                <li>
                  <strong>Exigências legais</strong>: Podemos divulgar suas informações se necessário para cumprir com 
                  a lei ou proteger nossos direitos legais.
                </li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Armazenamento e Segurança dos Dados</h2>
              <p>
                Tomamos medidas de segurança razoáveis para proteger suas informações pessoais, mas nenhuma transmissão 
                de dados pela internet é 100% segura. Não podemos garantir a segurança total das informações transmitidas 
                através do aplicativo.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Retenção de Dados</h2>
              <p>
                Reteremos suas informações pessoais enquanto sua conta estiver ativa ou enquanto for necessário para 
                fornecer nossos serviços. Você pode solicitar a exclusão de suas informações a qualquer momento, 
                entrando em contato conosco.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">6. Seus Direitos</h2>
              <p>Você tem os seguintes direitos em relação às suas informações pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Acesso</strong>: Você pode solicitar uma cópia das informações pessoais que possuímos sobre você.
                </li>
                <li>
                  <strong>Correção</strong>: Se suas informações estiverem incorretas ou desatualizadas, você pode 
                  solicitar a correção delas.
                </li>
                <li>
                  <strong>Exclusão</strong>: Você pode solicitar a exclusão de suas informações pessoais a qualquer momento. 
                  No entanto, observe que a exclusão de algumas informações pode impedir que você continue utilizando 
                  certos recursos do aplicativo. Para mais informações sobre como excluir sua conta, visite nossa página de{" "}
                  <a 
                    href="/exclusao-de-conta" 
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    Solicitação de Exclusão de Conta
                  </a>.
                </li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Alterações nesta Política de Privacidade</h2>
              <p>
                Nós podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças nas nossas 
                práticas ou por razões legais, operacionais ou regulatórias. Recomendamos que você revise esta página 
                periodicamente. Alterações nesta política serão publicadas nesta página com a data de atualização indicada.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Contato</h2>
              <p>
                Se você tiver perguntas sobre esta Política de Privacidade ou quiser exercer qualquer um dos seus direitos 
                mencionados acima, entre em contato conosco por e-mail:
              </p>
              <p className="mt-4">
                <strong>E-mail de contato</strong>:{" "}
                <a 
                  href="mailto:suporte@heatgame.com.br" 
                  className="text-orange-500 hover:text-orange-400 underline font-semibold"
                >
                  suporte@heatgame.com.br
                </a>
              </p>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-400">
                <strong>Nota</strong>: Esta Política de Privacidade foi criada para cumprir as leis de proteção de dados, 
                incluindo o <strong className="text-orange-500">LGPD</strong> (Lei Geral de Proteção de Dados) e o{" "}
                <strong className="text-orange-500">GDPR</strong> (Regulamento Geral de Proteção de Dados).
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

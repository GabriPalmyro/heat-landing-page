import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Termos de Uso - Heat Game",
  description: "Leia nossos termos de uso e condições de utilização do Heat Game.",
}

export default function TermsOfUsePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Termos de Uso — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇧🇷 PT</span>
              <a 
                href="/en/terms-of-use" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇺🇸 EN
              </a>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Última atualização:</strong> 15/05/2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg">
              Bem-vindo ao <strong className="text-orange-500">Heat Game</strong>! Ao acessar ou usar nosso aplicativo, 
              você concorda com os termos e condições descritos abaixo. Leia com atenção.
            </p>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao utilizar o Heat Game, você concorda com estes Termos de Uso. Caso não concorde com qualquer parte 
                destes termos, por favor, não utilize o aplicativo.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">2. Público-Alvo</h2>
              <p>
                Este aplicativo é destinado exclusivamente a maiores de 18 anos. Ao usar o Heat Game, você declara 
                ser maior de idade conforme as leis do seu país de residência.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">3. Descrição do Serviço</h2>
              <p>O Heat Game é um aplicativo de jogos interativos para casais, com dinâmicas como:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Verdade ou Desafio</li>
                <li>Beija, Lambe ou Chupa</li>
                <li>Jogo das Posições</li>
                <li>Date Perfeito</li>
              </ul>
              <p className="mt-4">Entre outros jogos voltados ao entretenimento adulto e íntimo.</p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Conta de Usuário</h2>
              <p>
                Alguns recursos exigem autenticação via Google, Apple ou Supabase. Ao criar uma conta, você concorda 
                em fornecer informações verdadeiras e manter sua conta segura.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Conteúdo Sensível</h2>
              <p>
                O app pode conter conteúdo provocativo e sensível. Todo o uso deve ser feito de forma consensual entre 
                adultos. O Heat Game <strong>não incentiva</strong> qualquer forma de comportamento inapropriado ou ilegal.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">6. Assinaturas e Pagamentos</h2>
              <p>
                O app pode oferecer planos mensais ou anuais com benefícios exclusivos. O pagamento é processado 
                diretamente pelas lojas (Google Play e App Store). Você pode cancelar a qualquer momento via 
                configurações da loja.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Privacidade</h2>
              <p>
                Nos preocupamos com sua privacidade. Veja nossa{" "}
                <a 
                  href="/politicas-de-privacidade" 
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Política de Privacidade
                </a>{" "}
                para saber como seus dados são tratados.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Restrições de Uso</h2>
              <p>É proibido:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Usar o app para fins ilegais;</li>
                <li>Compartilhar sua conta com terceiros;</li>
                <li>Reproduzir ou distribuir o conteúdo do app sem autorização.</li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">9. Modificações</h2>
              <p>
                Podemos atualizar estes Termos a qualquer momento. Notificações serão enviadas no próprio app ou via e-mail.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">10. Contato</h2>
              <p>Em caso de dúvidas, sugestões ou solicitações, envie um e-mail para:</p>
              <p className="mt-4">
                📧{" "}
                <a 
                  href="mailto:suporte@heatgame.com.br" 
                  className="text-orange-500 hover:text-orange-400 underline font-semibold"
                >
                  suporte@heatgame.com.br
                </a>
              </p>
            </section>

            <hr className="border-gray-700" />

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

import React, { useState } from 'react';
import { 
  Brain, 
  Rocket, 
  Target, 
  PenTool, 
  Play, 
  CheckCircle, 
  Star, 
  Book, 
  Zap, 
  Gift, 
  DollarSign, 
  Shield,
  Clock,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  Bot,
  ArrowRight,
  ChevronDown,
  FileText,
  Download,
  Edit3,
  Layers,
  Sparkles,
  BookOpen,
  Cpu,
  Globe,
  BarChart3,
  MessageSquare,
  Palette,
  Settings,
  Wand2,
  Briefcase,
  Crown,
  Gem,
  Infinity,
  TrendingDown,
  Timer,
  Lock
} from 'lucide-react';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const robots = [
    { name: 'Planejamento do Livro', icon: Target, description: 'Estrutura completa do seu livro com capítulos organizados' },
    { name: 'Capítulo Introdutório', icon: Book, description: 'Cria introduções envolventes que prendem o leitor' },
    { name: 'Capítulo Intermediário', icon: PenTool, description: 'Desenvolve o conteúdo principal com fluidez' },
    { name: 'Capítulo de Desenvolvimento', icon: TrendingUp, description: 'Expande ideias com profundidade e clareza' },
    { name: 'Capítulo Final', icon: Award, description: 'Conclusões impactantes que marcam o leitor' },
    { name: 'Complementação do Conteúdo', icon: Zap, description: 'Adiciona detalhes e enriquece o material' },
    { name: 'Criação de Título', icon: Lightbulb, description: 'Títulos magnéticos que atraem compradores' }
  ];

  const benefits = [
    { text: 'Assinatura Anual ao app', icon: CheckCircle },
    { text: 'Suporte especializado por 1 ano', icon: Shield },
    { text: 'Atualizações de Prompts', icon: Rocket },
    { text: 'Garantia incondicional de 7 dias', icon: Clock },
    { text: 'Comunidade exclusiva de autores', icon: Users },
    { text: 'Método 100% validado e testado', icon: Star }
  ];

  const features = [
    {
      title: 'IA Especializada em Livros',
      description: 'Não é uma IA genérica. É treinada especificamente para escrita de livros com técnicas de copywriting avançadas, resultando em conteúdo 1000% superior.',
      icon: Brain,
      highlight: '1000% melhor que GPT comum'
    },
    {
      title: 'Processo Completo de Bestseller',
      description: 'Do planejamento à publicação, tudo em um único app. Estrutura validada por autores que faturam até R$10 mil/mês com seus livros.',
      icon: Trophy,
      highlight: 'Método validado por bestsellers'
    },
    {
      title: 'ChatGPT + 6 IAs Integradas',
      description: 'Combinação poderosa de múltiplas inteligências artificiais trabalhando em conjunto para criar conteúdo excepcional.',
      icon: Bot,
      highlight: '7 IAs trabalhando juntas'
    },
    {
      title: 'Base de Conhecimento Integrada',
      description: 'Método de escrita persuasiva integrado com técnicas comprovadas de conversão e engajamento do leitor.',
      icon: BookOpen,
      highlight: 'Técnicas de persuasão integradas'
    },
    {
      title: 'Gerador Infinito de Ideias',
      description: 'Nunca mais fique sem saber o que escrever. Sistema inteligente que gera ideias ilimitadas para seus livros e capítulos.',
      icon: Lightbulb,
      highlight: 'Ideias ilimitadas'
    },
    {
      title: 'Feedback Profissional',
      description: 'Receba análises detalhadas dos seus livros com sugestões de melhorias para maximizar vendas e engajamento.',
      icon: Award,
      highlight: 'Análise profissional'
    }
  ];

  const writingStyles = [
    'Narrativo', 'Persuasivo', 'Técnico', 'Acadêmico', 'Jornalístico',
    'Literário', 'Comercial', 'Educativo', 'Motivacional', 'Científico',
    'Humorístico', 'Dramático', 'Poético', 'Descritivo', 'Argumentativo',
    'Informativo', 'Criativo', 'Formal', 'Casual', 'Profissional'
  ];

  const bonusContent = [
    {
      title: '+ de 20 CURSOS Completos',
      description: 'Estratégias avançadas de venda, marketing digital e posicionamento de autor',
      icon: Gift,
      value: 'R$ 2.997'
    },
    {
      title: '+ de 500 Prompts Treinados',
      description: 'Comandos especializados para cada tipo de conteúdo e estilo de escrita',
      icon: MessageSquare,
      value: 'R$ 497'
    },
    {
      title: '+ de 20 Treinamentos',
      description: 'Como atrair, engajar e converter leitores em compradores fiéis',
      icon: Users,
      value: 'R$ 1.497'
    },
    {
      title: 'Imersões Exclusivas',
      description: 'Eventos ao vivo apenas para membros fundadores com especialistas',
      icon: Crown,
      value: 'R$ 997'
    },
    {
      title: 'Feedback Personalizado',
      description: 'Análise profissional dos seus livros e ebooks por especialistas',
      icon: PenTool,
      value: 'R$ 797'
    },
    {
      title: 'Gerador de Ideias Infinito',
      description: 'Sistema que nunca para de gerar ideias para seus próximos livros',
      icon: Infinity,
      value: 'R$ 397'
    }
  ];

  const purchaseUrl = "https://sun.eduzz.com/KW83XPNK01";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-black">
        {/* Background Image with Transparency */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/image.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              <Brain className="w-5 h-5" />
              🧠 NOVO APP DE IA PARA ESCREVER EBOOKS E LIVROS DO ZERO
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Transforme sua ideia em um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                livro completo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Com a ajuda de uma IA guiada, mesmo que você nunca tenha escrito antes.
            </p>

            {/* Video Player */}
            <div className="max-w-4xl mx-auto mb-6">
              <div className="relative bg-black rounded-2xl p-4 shadow-2xl border border-gray-800">
                <div className="aspect-video bg-black rounded-xl flex items-center justify-center relative overflow-hidden">
                  {!isVideoPlaying ? (
                    <div className="text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl"></div>
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 mb-4 mx-auto"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </button>
                      <p className="relative z-10 text-gray-300 text-lg font-semibold">👉 Assista ao vídeo e veja como funciona</p>
                    </div>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/iRK_5lsJB2w?autoplay=1"
                      className="w-full h-full rounded-xl"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* AI Writing Showcase */}
      <section className="py-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Veja a IA Escrevendo em Tempo Real
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* AI Writing Process */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Edit3 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Escrita Inteligente</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">IA analisando tema...</span>
                  </div>
                  <p className="text-sm text-gray-400">"Como Investir em Criptomoedas"</p>
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Gerando estrutura...</span>
                  </div>
                  <p className="text-xs text-gray-400">Capítulo 1: Fundamentos<br/>Capítulo 2: Estratégias...</p>
                </div>
              </div>
            </div>

            {/* Generated Content */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Conteúdo Gerado</h3>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <p className="text-sm text-gray-300 leading-relaxed">
                  "As criptomoedas revolucionaram o mundo financeiro, oferecendo oportunidades únicas de investimento. Neste guia completo, você descobrirá estratégias comprovadas para..."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <span className="text-xs text-gray-400">75%</span>
                </div>
              </div>
            </div>

            {/* Final Result */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Livro Finalizado</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-3 rounded-lg border border-green-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-100">Criptomoedas para Iniciantes</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-xs text-green-200">156 páginas • 12 capítulos</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-green-500/20 text-green-100 py-2 px-3 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
                    <Download className="w-4 h-4 inline mr-1" />
                    PDF
                  </button>
                  <button className="flex-1 bg-green-500/20 text-green-100 py-2 px-3 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Publicar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Member Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full text-lg font-semibold mb-6">
            <Crown className="w-5 h-5" />
            🚀 Se torne um MEMBRO FUNDADOR
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ative agora a IA 100% TREINADA para criar livros e EBOOKs!
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Leve mais de 10 robôs de IA treinados como membro fundador
          </p>
        </div>
      </section>

      {/* What is MoneyBook AI */}
      <section className="py-16 bg-gradient-to-br from-slate-800/50 to-blue-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ✨ O QUE É O{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                MONEYBOOK AI?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Essa é a sua chance de escrever o seu livro ou ebook do zero, seguindo um passo a passo simples, 
              validado e altamente poderoso para transformar o seu conhecimento em livros e ebooks que vendem todos os dias.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 px-6 py-3 rounded-full">
              <Trophy className="w-5 h-5 text-green-400" />
              <span className="text-green-100 font-semibold">📘 ÚNICO APP com o processo completo para construir um BESTSELLER</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700/50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <span className="text-sm text-orange-400 font-semibold">{feature.highlight}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robots Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🤖{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                1 ROBÔ PARA CADA ETAPA
              </span>{' '}
              DO LIVRO
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Uma IA treinada para escrever livros e ebooks utilizando técnicas avançadas de copywriting
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-6 py-3 rounded-full">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="text-blue-100 font-semibold">📌 Cada robô é especializado em uma função específica</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {robots.map((robot, index) => (
              <div key={index} className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 p-5 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0">
                    <robot.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-100 mb-2">{robot.name}</h3>
                    <p className="text-sm text-green-200/80">{robot.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-6 py-3 rounded-full">
              <Palette className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-100 font-semibold">✨ 57 Estilos de Escrita Diferentes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Styles Showcase */}
      <section className="py-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                57 Estilos de Escrita
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Use diferentes estilos e tons para transformar o seu livro em algo profissional e envolvente. 
              Ideal para ficção e não ficção!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {writingStyles.map((style, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 border border-purple-500/30 px-4 py-2 rounded-lg text-center hover:border-purple-400/50 transition-colors">
                <span className="text-sm font-medium text-purple-100">{style}</span>
              </div>
            ))}
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-lg text-center">
              <span className="text-sm font-bold text-white">+37 Mais</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Cada estilo é otimizado para diferentes tipos de público e objetivos de conversão
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-green-100 font-semibold">Transforme seu livro em algo profissional e envolvente</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="py-16 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🧠{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ChatGPT + 6 IAs Integradas
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-3 max-w-4xl mx-auto">
            Essa IA não é genérica. É uma IA com método, estrutura e treinamento contínuo, 
            com resultados 1000% melhores do que um GPT comum.
          </p>
          <p className="text-lg text-blue-300 mb-8 max-w-3xl mx-auto">
            📚 E mais: integração com a base de conhecimento e nosso método de escrita persuasiva.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 p-6 rounded-2xl border border-blue-500/30">
              <Brain className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-3">IA Especializada</h3>
              <p className="text-gray-300 mb-3">Treinada especificamente para escrita de livros e ebooks</p>
              <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                <span className="text-blue-200 text-sm font-semibold">1000% melhor</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 p-6 rounded-2xl border border-purple-500/30">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-3">Método Integrado</h3>
              <p className="text-gray-300 mb-3">Base de conhecimento com técnicas de escrita persuasiva</p>
              <div className="bg-purple-500/20 px-3 py-1 rounded-full">
                <span className="text-purple-200 text-sm font-semibold">Copywriting avançado</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 p-6 rounded-2xl border border-green-500/30">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-3">Resultados Comprovados</h3>
              <p className="text-gray-300 mb-3">Método validado por autores bestsellers</p>
              <div className="bg-green-500/20 px-3 py-1 rounded-full">
                <span className="text-green-200 text-sm font-semibold">Até R$10k/mês</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              💸 O APP de IA que vai te ajudar a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                ESCREVER e VENDER
              </span>{' '}
              como um AUTOR BESTSELLER
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Como MEMBRO Fundador da MoneyBOOK AI, você recebe:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bonusContent.map((bonus, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                    <bonus.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{bonus.title}</h3>
                    <span className="text-orange-400 font-semibold">{bonus.value}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{bonus.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 px-8 py-4 rounded-full">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="text-green-100 font-bold text-lg">🎯 TRANSFORME O SEU TECLADO EM UM CAIXA ELETRÔNICO 24H</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-12 bg-gradient-to-br from-green-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-orange-900/30 to-orange-800/30 rounded-xl border border-orange-500/30">
                <Award className="w-8 h-8 text-orange-400" />
                <span className="text-lg font-semibold">🏆 Robô para te tornar um AUTOR BESTSELLER na Amazon</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-xl border border-blue-500/30">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="text-lg font-semibold">✅ 1 ANO DE ASSINATURA DO APP</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-xl border border-green-500/30">
                <Infinity className="w-8 h-8 text-green-400" />
                <span className="text-lg font-semibold">✅ + ROBÔS + PROMPTS + CURSOS COM ACESSO VITALÍCIO</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Valor Total dos Bônus
                </h3>
                <div className="text-4xl font-bold text-green-400 mb-2">R$ 7.182</div>
                <p className="text-gray-300">Você recebe TUDO por apenas R$ 297</p>
                <div className="mt-3 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <span className="text-green-100 font-semibold">Economia de 96%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700">
            <div className="mb-6">
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 animate-pulse">
                ⏰ OFERTA LIMITADA - ÚLTIMAS VAGAS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-red-400 line-through">💰 De R$2.997</span>
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                POR APENAS R$297
              </h3>
              <p className="text-xl text-gray-300 mb-3">ou 12x de R$29,70</p>
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-full">
                <Timer className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-100 text-sm font-semibold">Desconto de 90% apenas hoje</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <benefit.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <a 
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🔘 GARANTIR ACESSO AGORA
              </a>
              <a 
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🔘 Quero escrever meu livro com IA!
              </a>
            </div>

            <div className="mt-6 p-5 bg-green-900/30 border border-green-500/30 rounded-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-green-100 font-bold text-lg">🔒 Compra 100% Segura</span>
              </div>
              <p className="text-green-200 text-sm">
                Garantia incondicional de 7 dias • Acesso imediato após o pagamento • Pagamento totalmente criptografado
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⚡ Não perca esta oportunidade única!
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Apenas os primeiros 100 membros fundadores terão acesso a este preço especial
          </p>
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">21</div>
              <div className="text-sm text-gray-400">Vagas restantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">24h</div>
              <div className="text-sm text-gray-400">Para acabar</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">90%</div>
              <div className="text-sm text-gray-400">De desconto</div>
            </div>
          </div>
          <a 
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Rocket className="w-6 h-6" />
            GARANTIR MINHA VAGA AGORA
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-3">
              MoneyBook AI
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A revolução da escrita com Inteligência Artificial. 
              Transforme suas ideias em livros bestsellers com o poder da IA especializada.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 MoneyBook AI. Todos os direitos reservados. | Política de Privacidade | Termos de Uso
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Trophy component (missing from lucide-react in this context)
function Trophy({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

export default App;
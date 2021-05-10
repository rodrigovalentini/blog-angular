import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css'],
})
export class BlogDashboardComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Angular Ivy', cols: 1, rows: 1 },
          {
            title: 'Novidades Angular 11, vale a pena atualizar?',
            cols: 1,
            rows: 1,
          },
          { title: 'Angular Material', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        {
          title: 'Angular Ivy',
          cols: 2,
          rows: 1,
          img: '../../../assets/images/Ivy-banner.jpg',
          text:
            'Conforme prometido em um dos meus artigos anteriores sobre: Angular 8.0, hoje eu irei escrever algo mais detalhado sobre o Ivy, o novo motor de render do Angular.' +
            'Para aqueles que já estão acompanhando a evolução do Angular nesses últimos updates (versões 6, 7, 8) , com certeza já ouviram falar algo sobre o Ivy.' +
            'Agora pensando no pessoal que ainda não viu nada sobre esse assunto, vamos voltar nas versões anteriores do Angular para entender como ele renderizava o nosso código antes do Ivy.' +
            'Quando trabalhamos em projetos Angular, nós basicamente criamos componentes que ficam dentro de Módulos.' +
            'Um componente é composto por: um arquivo .ts que trabalha como uma controller, um arquivo .css com estilo do nosso componente, um arquivo .html com a estrutura do componente e um arquivo .spec.ts para os nossos testes.' +
            'Tendo esse cenário anterior em mente, nós escrevemos códigos em TypeScript, que devem interagir com os nossos templates HTML, que no momento do Build irão gerar os nosso bundles.' +
            'No Angular, todos componentes declarados nos módulos são bundles e serão carregados na chamada da nossa aplicação.' +
            'Caso você adicione todos os seus componentes em um único módulo, como por exemplo no app.module.ts, eles serão carregados em um único bundle no primeiro carregamento da sua aplicação.' +
            'Por esse motivo que nós separamos os nossos componentes em módulos e carregamos eles em Lazy Loading.' +
            'Dessa forma nós conseguimos garantir que os nossos bundles serão menores e que irão carregar sobre demanda.' +
            'Caso tenha interesse em saber mais sobre Lazy Loading em um projeto Angular, eu recomendo a leitura do seguinte artigo: Angular Lazy Loading.' +
            'Bom, até aqui nenhuma novidade né? Agora focando no momento do build da nossa aplicação, como nossos arquivos são renderizados no navegador?' +
            'Basicamente o nosso código é compilado para arquivos JavaScript com instruções de como renderizar os nossos componentes no DOM (Document Object Model) quando ele (o componente) for requisitado, através de bundles.' +
            'Para fazer esse processo no Angular nós temos: o JIT (Just In Time), AOT( Ahead of time) e para aqueles que já precisaram indexar as suas páginas ou tiveram que adicionar um botão de compartilhar algum conteúdo nas redes sociais, o SSR (Server-side rendering). Fonte: https://medium.com/xp-inc/angular-conhecendo-ivy-123aa76e7755',
        },
        {
          title: 'Novidades Angular 11, vale a pena atualizar?',
          cols: 1,
          rows: 1,
          text:
            'O Angular 11 trouxe uma grande melhoria de performance no build. Muito disso se deu por conta da melhoria na performance do NGCC( Angular Compatibility Compiler) que em em alguns casos trouxe uma velocidade de compilação 4 vezes mais rápido. Outro ponto que melhorou o tempo de build foi justamente a atualização para o TypeScript 4.0. Por conta da migração do TSLint para o ESLint o Angular acabou por acompanhar esse movimento, então o TSLint está sendo removido da nova versão do Angular. Então com essa mudança é preciso fazer a migração para o ESLint. A menos que você precise urgentemente de um build mais rápido, ou da melhoria do log sim. Em suma por causa da escolha do time do Angular de liberar duas versões do Angular por ano não houve muitas mudanças. Mas as mudanças que vieram podem ajudar no fluxo de trabalho do dia a dia. Fonte: https://devporai.com.br/novidades-do-angular-11/',
        },
        {
          title: 'Angular Material',
          cols: 1,
          rows: 2,
          text:
            'O Angular Material 2 disponibiliza em torno de 25 High-Quality UI Components ( User Interface Components – componentes de interface de usuário de alta qualidade ) construídos utilizando Angular e TypeScript, oferece suporte para as mais novas versões dos navegadores mais utilizados na Web, sendo eles Chrome (incluindo o Android), Firefox, Safari (incluindo iOS) e Internet Explorer 11 / Edge. Além disso, este também se preocupa com a experiência do usuário, trazendo assim os seguintes Screen Readers: NVDA e o JAWS voltados para o Internet Explorer, Firefox e Chrome (no Windows), VoiceOver acompanhando o Safari no iOS e Safari / Chrome no OSX, e por fim o TalkBack com o Chrome no Android.  Fonte: https://blog.cedrotech.com/primeng-e-angular-material-qual-melhor-satisfaz-o-seu-projeto/',
        },
        { title: 'Card 4', cols: 1, rows: 1, text: '' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

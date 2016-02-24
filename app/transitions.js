export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('deferred'),
    this.use('explode', {
      matchBy: 'data-hero-id',
      use: ['fly-to']
    }),
    this.reverse('explode', {
      matchBy: 'data-hero-id',
      use: ['fly-to']
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('normal'),
    this.use('explode', {
      matchBy: 'data-hero-id',
      use: ['fly-to']
    }),
    this.reverse('explode', {
      matchBy: 'data-hero-id',
      use: ['fly-to']
    })
  );
};

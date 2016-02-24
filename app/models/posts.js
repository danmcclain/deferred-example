import Ember from 'ember';

const {
  computed,
  RSVP
} = Ember;

const content = `

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus augue at eros dapibus, sed finibus dolor pharetra. Maecenas eget augue in purus ultrices pharetra vel nec justo. Nunc tempus sit amet dui eget mollis. Nullam aliquet efficitur augue, a posuere nibh aliquam eget. Etiam sollicitudin ac dui a fermentum. Vestibulum mattis elit nunc, sit amet interdum sapien interdum ac. Nunc a turpis orci. Integer elementum vehicula placerat.
  </p>
<p>
Nam eros orci, commodo vel risus vitae, auctor consequat diam. Nunc sed purus aliquet, placerat felis eu, facilisis nulla. Nulla sagittis lacinia congue. Morbi mollis, lectus et volutpat pulvinar, ex felis vulputate urna, in finibus justo turpis at lectus. Integer suscipit nunc nunc, sit amet convallis odio facilisis sed. Aenean sit amet pretium enim, ac euismod massa. Vestibulum fermentum rutrum justo id tincidunt.
  </p>
<p>
Proin imperdiet, metus eu aliquet gravida, nibh purus pellentesque diam, sed venenatis est libero eget leo. Nam a elit ex. Cras pharetra ligula leo. Praesent pharetra urna urna, nec sagittis libero bibendum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean purus enim, condimentum at dignissim nec, consequat eget ante. Morbi nec faucibus neque, id congue mi. Sed convallis gravida tristique. Sed nec blandit ex. Etiam pulvinar efficitur lectus eget placerat. Etiam congue pretium eleifend.
  </p>
<p>
Nunc ultricies, odio non fringilla cursus, justo quam mattis odio, quis fermentum enim nibh vitae ex. Aenean vulputate nibh rutrum, tristique risus ut, hendrerit elit. Aenean eleifend justo ac consectetur fringilla. Morbi posuere elementum erat, eu accumsan sem sagittis eu. Proin faucibus nibh vitae porta facilisis. Integer laoreet sollicitudin justo et ultricies. Sed viverra, nunc quis semper malesuada, lacus ipsum malesuada nisl, at lacinia nunc sapien vitae enim.
  </p>
<p>
Aenean mollis eros interdum velit luctus, dignissim bibendum dui dignissim. Suspendisse efficitur purus quis dictum consectetur. Vestibulum pellentesque sit amet felis sagittis volutpat. Donec justo turpis, semper fringilla dictum sollicitudin, fermentum sed ex. Quisque nec ipsum turpis. Aliquam malesuada iaculis massa, ut ullamcorper augue pharetra auctor. Aliquam fringilla, nibh id lacinia venenatis, tellus tellus pretium nulla, eget imperdiet velit ipsum mattis sem. Maecenas vitae erat nec nibh sollicitudin interdum at sit amet purus. Aenean dignissim lacus ipsum, a finibus lacus dictum accumsan. Vivamus lacus nisi, finibus non erat quis, aliquam finibus mauris. Duis nec quam dolor. Phasellus condimentum rutrum diam eget aliquam. Sed rhoncus interdum molestie. Nunc lobortis sapien eget magna pharetra rhoncus. Phasellus scelerisque volutpat ex, at aliquam felis tincidunt eget. Donec dignissim porttitor bibendum.
  </p>
`;
const Post = Ember.Object.extend({
  body: computed(function() {
    let deferred = RSVP.defer();

    setTimeout(() => {
      deferred.resolve(content);
    }, 3000);

    return deferred.promise;
  }).volatile()
});

export default [
  Post.create({
    id: 1,
    title: 'Post 1',
  }),
  Post.create({
    id: 2,
    title: 'Post 2'
  }),
  Post.create({
    id: 3,
    title: 'Post 3'
  }),
  Post.create({
    id: 4,
    title: 'Post 4'
  }),
  Post.create({
    id: 5,
    title: 'Post 5'
  })
]

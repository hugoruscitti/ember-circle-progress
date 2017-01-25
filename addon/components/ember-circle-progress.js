import Ember from 'ember';
import layout from '../templates/components/ember-circle-progress';

export default Ember.Component.extend({
  layout,

  size: 80,
  value: 0.5,
  responsive: false,
  startAngle: -Math.PI,
  reverse: false,
  thickness: "false",
  lineCap: 'butt',
  fill: { gradient: ["#3aeabb", "#fdd250"] },
  emptyFill: "rgba(0, 0, 0, .1)",
  animation: { duration: 1200 },
  animationStartValue: 0.0,

  classNames: ['ember-circle-progress'],
  classNameBindings: ['responsive:ember-circle-progress-responsive'],

  didInsertElement() {
    let size = this.get('size');

    if (this.get('responsive')) {
      size = 1000;
    }

    /*let circle = */ this.$().circleProgress({
      value: this.get('value'),
      size: size,
      startAngle: this.get('startAngle'),
      reverse: this.get('reverse'),
      thickness: this.get('thickness'),
      lineCap: this.get('lineCap'),
      fill: this.get('fill'),
      emptyFill: this.get('emptyFill'),
      animation: this.get('animation'),
      animationStartValue: this.get('animationStartValue'),
    });

    if (this.get('responsive')) {
      //circle.on('circle-animation-progress', (event, progress) => {
      //  this.$('.progress-text').html(Math.round(100 * progress) + '<i>%</i>');
      //});
    }

  }
});

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
  textColor: 'gray',
  showText: true,

  classNames: ['ember-circle-progress'],
  classNameBindings: ['responsive:ember-circle-progress-responsive'],

  didInsertElement() {
    let size = this.get('size');
    let textColor = this.get('textColor');

    let circle = this.$().circleProgress({
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


    if (this.get('showText')) {

      circle.on('circle-inited', (event, progress, value) => {
        this.drawText(textColor, size, value);
      });

      circle.on('circle-animation-progress', (event, progress, value) => {
        this.drawText(textColor, size, value);
      });
    }

  },

  drawText(textColor, size, valueStep) {
    let ctx = this.$('canvas')[0].getContext('2d');

    ctx.fillStyle = textColor;
    ctx.font = (size/4) + 'px arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let value = Math.round(100 * valueStep) + '%';
    ctx.fillText(value, size/2, size/2);
  }
});

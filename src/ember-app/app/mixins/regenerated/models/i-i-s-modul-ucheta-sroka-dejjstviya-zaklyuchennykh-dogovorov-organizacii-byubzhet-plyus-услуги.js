import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едВремени: DS.attr('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-ед-времени'),
  затрВрем: DS.attr('decimal'),
  наименование: DS.attr('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-услуга')
});

export let ValidationRules = {
  едВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-услуги.validations.едВремени.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  затрВрем: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-услуги.validations.затрВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    затрВрем: attr('Затраченное время', { index: 1 }),
    едВремени: attr('Единица времени', { index: 2 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    затрВрем: attr('Затраченное время', { index: 1 }),
    едВремени: attr('Единица времени', { index: 2 })
  });
};

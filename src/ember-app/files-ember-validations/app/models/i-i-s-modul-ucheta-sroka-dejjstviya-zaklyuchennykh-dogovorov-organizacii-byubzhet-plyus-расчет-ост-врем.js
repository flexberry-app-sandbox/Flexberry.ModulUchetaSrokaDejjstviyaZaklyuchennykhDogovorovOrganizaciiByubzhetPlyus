import {
  defineNamespace,
  defineProjections,
  Model as РасчетОстВремMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-расчет-ост-врем';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетОстВремMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

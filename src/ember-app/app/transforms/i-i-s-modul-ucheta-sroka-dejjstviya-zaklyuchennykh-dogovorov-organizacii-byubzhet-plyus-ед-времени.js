import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдВремениEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-ед-времени';

export default FlexberryEnum.extend({
  enum: ЕдВремениEnum,
  sourceType: 'IIS.Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov_organizacii_ByubzhetPlyus.ЕдВремени'
});

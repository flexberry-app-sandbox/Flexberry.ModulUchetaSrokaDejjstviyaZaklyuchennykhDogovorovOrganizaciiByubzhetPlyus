import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоговораEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-тип-договора';

export default FlexberryEnum.extend({
  enum: ТипДоговораEnum,
  sourceType: 'IIS.Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov_organizacii_ByubzhetPlyus.ТипДоговора'
});
